import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'employees',
    loadChildren: () =>
      import('@bnk/all-employees/shell').then(m => m.AllEmployeesShellModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('@bnk/all-clients/shell').then(m => m.AllClientsShellModule),
  },
  {
    path: 'loan-rates',
    loadChildren: () =>
      import('@bnk/all-loan-rates/shell').then(m => m.AllLoanRatesShellModule),
  },
];
