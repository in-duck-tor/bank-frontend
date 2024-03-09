export enum AccountStatus {
  Active = 'active',
  Closed = 'closed',
  Frozen = 'feozen',
}

export enum AccountType {
  Payment = 'payment',
  Loan = 'loan',
}

export interface Account {
  number: string;
  currencyCode?: string | null;
  bankCode?: string | null;
  amount: number;
  state: AccountStatus;
  comment?: string | null;
  type: AccountType;
}
