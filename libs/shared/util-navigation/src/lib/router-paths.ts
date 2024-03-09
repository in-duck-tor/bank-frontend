export const ROUTER_PATHS = {
  employees: 'employees',
  clients: 'clients',
  employeesActive: 'active',
  employeesInactive: 'inactive',
  clientsActive: 'active',
  clientsInactive: 'inactive',
  clientDetails: ':clientId',
  loanRates: 'loan-rates',
  accounts: 'accounts',
  accountsActive: 'active',
  accountsClosed: 'closed',
  accountDetail: ':accountId',
  loans: 'loans',
  loansActive: 'active',
  loansPaid: 'paid',
};

export const CLIENT_ACCOUNTS_ABSOLUTE_PATH = (clientId: number) => [
  '/',
  ROUTER_PATHS.clients,
  clientId,
  ROUTER_PATHS.accounts,
];

export const CLIENT_LOANS_ABSOLUTE_PATH = (clientId: number) => [
  '/',
  ROUTER_PATHS.clients,
  clientId,
  ROUTER_PATHS.loans,
];
