import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllClientsLayoutComponent } from '@bnk/all-clients/feature-layout';
import { AllClientsStoreModule } from '@bnk/all-clients/store';
import { ClientCreateModule } from '@bnk/client/api';
import { ClientStatus } from '@bnk/client/domain';
import { ROUTER_PATHS } from '@bnk/shared/util-navigation';

@NgModule({
  imports: [
    AllClientsStoreModule,
    ClientCreateModule,
    RouterModule.forChild([
      {
        path: '',

        component: AllClientsLayoutComponent,
        children: [
          {
            path: ROUTER_PATHS.clientsActive,
            loadComponent: () =>
              import('@bnk/all-clients/feature-list').then(
                m => m.AllClientsListComponent,
              ),
            data: {
              status: ClientStatus.Active,
            },
          },
          {
            path: ROUTER_PATHS.clientsInactive,
            loadComponent: () =>
              import('@bnk/all-clients/feature-list').then(
                m => m.AllClientsListComponent,
              ),
            data: {
              status: ClientStatus.Inactive,
            },
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: ROUTER_PATHS.clientsActive,
          },
        ],
      },
      {
        path: `${ROUTER_PATHS.clientDetails}/${ROUTER_PATHS.accounts}`,
        loadChildren: () =>
          import('@bnk/all-accounts/api').then(m => m.AllAccountsShellModule),
      },
    ]),
  ],
})
export class AllClientsShellModule {}
