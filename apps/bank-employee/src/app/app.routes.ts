import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'employees',
    loadChildren: () =>
      import('@bnk/all-employees/shell').then(m => m.AllEmployeesShellModule),
  },
];
