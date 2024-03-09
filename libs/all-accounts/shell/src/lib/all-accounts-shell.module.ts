import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountStatus } from '@bnk/all-accounts/domain';
import { AllAccountsLayoutComponent } from '@bnk/all-accounts/feature-layout';
import { ROUTER_PATHS } from '@bnk/shared/util-navigation';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AllAccountsLayoutComponent,
        children: [
          {
            path: ROUTER_PATHS.accountsActive,
            loadComponent: () =>
              import('@bnk/all-accounts/feature-list').then(
                m => m.AllAccountsListComponent,
              ),
            data: {
              status: AccountStatus.Active,
            },
          },
          {
            path: ROUTER_PATHS.accountsClosed,
            loadComponent: () =>
              import('@bnk/all-accounts/feature-list').then(
                m => m.AllAccountsListComponent,
              ),
            data: {
              status: AccountStatus.Closed,
            },
          },
          {
            path: '**',
            redirectTo: ROUTER_PATHS.accountsActive,
          },
        ],
      },
    ]),
  ],
})
export class AllAccountsShellModule {}
