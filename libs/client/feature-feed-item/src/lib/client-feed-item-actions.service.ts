import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ClientStatus, ShortClient } from '@bnk/client/domain';
import { IAction } from '@bnk/shared/ui-cards';
import {
  CLIENT_ACCOUNTS_ABSOLUTE_PATH,
  CLIENT_LOANS_ABSOLUTE_PATH,
} from '@bnk/shared/util-navigation';
import { take } from 'rxjs';

@Injectable()
export class ClientFeedItemActionsService {
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  getActions(
    client: ShortClient,
    actionsEventEmmiter: EventEmitter<void>,
  ): IAction[] {
    const baseActions = this.getBaseActions(client.id);

    switch (client.status) {
      case ClientStatus.Active:
        return [
          {
            name: client.isBlocked ? 'Разблокировать' : 'Заблокировать',
            onClick: () => {
              const banAction$ = client.isBlocked
                ? this.onUnblock(client)
                : this.onBlock(client);

              banAction$
                .pipe(take(1))
                .subscribe(() => actionsEventEmmiter.emit());
            },
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

  // TODO: убрать кринж
  private onBlock(client: ShortClient) {
    return this.http.post(`/user/api/v1/ban/${client.id}`, {});
  }

  // TODO: убрать кринж
  private onUnblock(client: ShortClient) {
    return this.http.delete(`/user/api/v1/ban/${client.id}`);
  }

  private navigateToAccounts(clientId: number): void {
    this.router.navigate(CLIENT_ACCOUNTS_ABSOLUTE_PATH(clientId));
  }

  private navigateToLoans(clientId: number): void {
    this.router.navigate(CLIENT_LOANS_ABSOLUTE_PATH(clientId));
  }
}
