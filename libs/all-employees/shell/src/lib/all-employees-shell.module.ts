import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllEmployeesLayoutComponent } from '@bnk/all-employees/feature-layout';
import { EmployeeStatus } from '@bnk/employee/domain';

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
              import('@bnk/all-employees/feature-list').then(
                m => m.AllEmployeesListComponent,
              ),
            data: {
              status: EmployeeStatus.Active,
            },
          },
          {
            path: 'inactive',
            loadComponent: () =>
              import('@bnk/all-employees/feature-list').then(
                m => m.AllEmployeesListComponent,
              ),
            data: {
              status: EmployeeStatus.Inactive,
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
export class AllEmployeesShellModule {}
