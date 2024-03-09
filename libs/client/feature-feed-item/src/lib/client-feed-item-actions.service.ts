import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ClientStatus, ShortClient } from '@bnk/client/domain';
import { IAction } from '@bnk/shared/ui-cards';
import {
  CLIENT_ACCOUNTS_ABSOLUTE_PATH,
  CLIENT_LOANS_ABSOLUTE_PATH,
} from '@bnk/shared/util-navigation';

@Injectable()
export class ClientFeedItemActionsService {
  private readonly router = inject(Router);

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
    this.router.navigate(CLIENT_ACCOUNTS_ABSOLUTE_PATH(clientId));
  }

  private navigateToLoans(clientId: number): void {
    this.router.navigate(CLIENT_LOANS_ABSOLUTE_PATH(clientId));
  }
}
