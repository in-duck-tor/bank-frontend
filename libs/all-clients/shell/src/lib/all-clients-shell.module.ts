import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllClientsLayoutComponent } from '@bnk/all-clients/feature-layout';
import { ClientStatus } from '@bnk/client/domain';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AllClientsLayoutComponent,
        children: [
          {
            path: 'active',
            loadComponent: () =>
              import('@bnk/all-clients/feature-list').then(
                m => m.AllClientsListComponent,
              ),
            data: {
              status: ClientStatus.Active,
            },
          },
          {
            path: 'inactive',
            loadComponent: () =>
              import('@bnk/all-clients/feature-list').then(
                m => m.AllClientsListComponent,
              ),
            data: {
              status: ClientStatus.Inactive,
            },
          },
          {
            path: '**',
            redirectTo: 'active',
          },
        ],
      },
    ]),
  ],
})
export class AllClientsShellModule {}
