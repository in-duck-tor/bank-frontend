import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllEmployeesLayoutComponent } from '@bnk/all-employees/feature-layout';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AllEmployeesLayoutComponent,
        children: [
          {
            path: 'active',
            loadComponent: () =>
              import('@bnk/all-employees/feature-all-active-employees').then(
                m => m.AllActiveEmployeesComponent,
              ),
          },
          {
            path: 'inactive',
            loadComponent: () =>
              import('@bnk/all-employees/feature-all-inactive-employees').then(
                m => m.AllInactiveEmployeesComponent,
              ),
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
export class AllEmployeesShellModule {}
