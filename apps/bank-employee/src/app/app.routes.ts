import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'employees',
    loadChildren: () =>
      import('@bnk/all-employees/shell').then(m => m.AllEmployeesShellModule),
  },
  {
    path: 'loan-rates',
    loadChildren: () =>
      import('@bnk/all-loan-rates/shell').then(m => m.AllLoanRatesShellModule),
  },
];
