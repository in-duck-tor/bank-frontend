import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllTransactionsLayoutComponent } from '@bnk/all-transactions/feature-layout';
import { AllTransactionsStoreModule } from '@bnk/all-transactions/store';
import { ROUTER_PATHS } from '@bnk/shared/util-navigation';

@NgModule({
  imports: [
    AllTransactionsStoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: AllTransactionsLayoutComponent,
        children: [
          {
            path: ROUTER_PATHS.transactions,
            loadComponent: () =>
              import('@bnk/all-transactions/feature-list').then(
                m => m.AllTransactionsListComponent,
              ),
          },
          { path: '**', redirectTo: ROUTER_PATHS.transactions },
        ],
      },
    ]),
  ],
})
export class AllTransactionsShellModule {}
