import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';

import { EmployeeStatus, ShortEmployee } from '@bnk/employee/domain';
import { IAction } from '@bnk/shared/ui-cards';
import { take } from 'rxjs';

@Injectable()
export class EmployeeFeedItemActionsService {
  private readonly http = inject(HttpClient);

  getActions(
    employee: ShortEmployee,
    actionsEventEmmiter: EventEmitter<void>,
  ): IAction[] {
    switch (employee.status) {
      case EmployeeStatus.Active:
        return [
          {
            name: employee.isBlocked ? 'Разблокировать' : 'Заблокировать',
            onClick: () => {
              const banAction$ = employee.isBlocked
                ? this.onUnblock(employee)
                : this.onBlock(employee);

              banAction$
                .pipe(take(1))
                .subscribe(() => actionsEventEmmiter.emit());
            },
          },
        ];
      case EmployeeStatus.Inactive:
        return [];
    }
  }

  // TODO: убрать кринж
  private onBlock(employee: ShortEmployee) {
    return this.http.post(`/user/api/v1/ban/${employee.id}`, {});
  }

  // TODO: убрать кринж
  private onUnblock(employee: ShortEmployee) {
    return this.http.delete(`/user/api/v1/ban/${employee.id}`);
  }
}
