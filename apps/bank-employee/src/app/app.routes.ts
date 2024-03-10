import { Route } from '@angular/router';

import { ROUTER_PATHS } from '@bnk/shared/util-navigation';

export const appRoutes: Route[] = [
  {
    path: ROUTER_PATHS.employees,
    loadChildren: () =>
      import('@bnk/all-employees/api').then(m => m.AllEmployeesShellModule),
  },
  {
    path: ROUTER_PATHS.clients,
    loadChildren: () =>
      import('@bnk/all-clients/api').then(m => m.AllClientsShellModule),
  },
  {
    path: ROUTER_PATHS.loanRates,
    loadChildren: () =>
      import('@bnk/all-loan-rates/api').then(m => m.AllLoanRatesShellModule),
  },
];
