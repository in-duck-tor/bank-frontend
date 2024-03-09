import { Injectable } from '@angular/core';

import { ClientStatus, ShortClient } from '@bnk/client/domain';
import { IAction } from '@bnk/shared/ui-cards';

@Injectable()
export class ClientFeedItemActionsService {
  getActions(client: ShortClient): IAction[] {
    const baseActions = this.getBaseActions(client.id);

    switch (client.status) {
      case ClientStatus.Active:
        return [
          {
            name: client.blockedUntil ? 'Разблокировать' : 'Заблокировать',
            onClick: client.blockedUntil
              ? () => this.onUnblock()
              : () => this.onBlock(),
          },
          ...baseActions,
        ];
      case ClientStatus.Inactive:
        return [...baseActions];
    }
  }

  private getBaseActions(clientId: number): IAction[] {
    return [
      {
        name: 'Все счета',
        onClick: () => this.navigateToAccounts(clientId),
      },
      {
        name: 'Все кредиты',
        onClick: () => this.navigateToLoans(clientId),
      },
    ];
  }

  private onBlock(): void {
    console.log(1);
  }

  private onUnblock(): void {
    console.log(2);
  }

  private navigateToAccounts(clientId: number): void {
    console.log(2);
  }

  private navigateToLoans(clientId: number): void {
    console.log(2);
  }
}
