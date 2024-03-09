export enum AccountStatus {
  Active = 'active',
  Closed = 'closed',
  Frozen = 'feozen',
}

export interface Account {
  number: number;
  currencyCode?: string | null;
  amount: number;
  state: AccountStatus;
  comment?: string | null;
}
