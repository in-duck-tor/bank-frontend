import { Injectable } from '@angular/core';

import { EmployeeStatus, ShortEmployee } from '@bnk/employee/domain';
import { IAction } from '@bnk/shared/ui-cards';

@Injectable()
export class EmployeeFeedItemActionsService {
  getActions(employee: ShortEmployee): IAction[] {
    switch (employee.status) {
      case EmployeeStatus.Active:
        return [
          {
            name: employee.blockedUntil ? 'Разблокировать' : 'Заблокировать',
            onClick: employee.blockedUntil
              ? () => this.onUnblock()
              : () => this.onBlock(),
          },
        ];
      case EmployeeStatus.Inactive:
        return [];
    }
  }

  private onBlock(): void {
    console.log(1);
  }

  private onUnblock(): void {
    console.log(2);
  }
}
