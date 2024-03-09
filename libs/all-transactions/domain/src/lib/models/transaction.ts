export enum TransactionType {
  Withdraw = 'withdraw',
  Deposit = 'deposit',
  Transfer = 'transfer',
  TransferToExternal = 'transfer_to_external',
  TransferFromExternal = 'transfer_from_external',
}

export enum TransactionStatus {
  Pending = 'pending',
  Commited = 'commited',
  Canceled = 'canceled',
}

export interface Transaction {
  id: number;
  type: TransactionType;
  status: TransactionStatus;
  startedAt: string;
  finishedAt?: string | null;
  depositOn?: TransactionTarget | null;
  withdrawFrom?: TransactionTarget | null;
}

interface TransactionTarget {
  amount: number;
  accountNumber: string;
  currencyCode?: string | null;
  bankCode?: string | null;
  bankName?: string | null;
}
