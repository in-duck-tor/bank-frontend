import { Injectable } from '@angular/core';

import { EmployeeStatus } from '@bnk/employee/domain';
import { IAction } from '@bnk/shared/ui-cards';

@Injectable()
export class EmployeeFeedItemActionsService {
  getActions(employeeStatus: EmployeeStatus, isBlocked: boolean): IAction[] {
    switch (employeeStatus) {
      case EmployeeStatus.Active:
        return [
          {
            name: isBlocked ? 'Разблокировать' : 'Заблокировать',
            onClick: isBlocked ? () => this.onUnblock() : () => this.onBlock(),
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
