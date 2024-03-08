import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllLoanRatesLayoutComponent } from '@bnk/all-loan-rates/feature-layout';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AllLoanRatesLayoutComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@bnk/all-loan-rates/feature-list').then(
                m => m.AllLoanRatesListComponent,
              ),
          },
        ],
      },
    ]),
  ],
})
export class AllLoanRatesShellModule {}
