import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllEmployeesLayoutComponent } from '@bnk/all-employees/feature-layout';
import { EmployeeStatus } from '@bnk/employee/domain';
import { ROUTER_PATHS } from '@bnk/shared/util-navigation';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AllEmployeesLayoutComponent,
        children: [
          {
            path: ROUTER_PATHS.employeesActive,
            loadComponent: () =>
              import('@bnk/all-employees/feature-list').then(
                m => m.AllEmployeesListComponent,
              ),
            data: {
              status: EmployeeStatus.Active,
            },
          },
          {
            path: ROUTER_PATHS.employeesInactive,
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
