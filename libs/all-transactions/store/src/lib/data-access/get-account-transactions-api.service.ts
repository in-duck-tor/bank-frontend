import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import {
  TransactionStatus,
  TransactionType,
} from '@bnk/all-transactions/domain';

export interface TransactionsApiRequestParams {
  accountNumber: string;
}

export interface TransactionTargetApiResponse {
  amount: number;
  currencyCode?: string | null;
  accountNumber: string;
  bankCode: string;
  bankName?: string | null;
}

export interface TransactionApiResponse {
  id: number;
  type: TransactionType;
  status: TransactionStatus;
  startedAt: string;
  finishedAt?: string | null;
  depositOn?: TransactionTargetApiResponse | null;
  withdrawFrom?: TransactionTargetApiResponse | null;
}

@Injectable()
export class GetAllAccountTransactionsApiService {
  private readonly http = inject(HttpClient);

  loadTransactions(params: TransactionsApiRequestParams) {
    return this.http.get<ReadonlyArray<TransactionApiResponse>>(
      `http://89.19.214.8:8000/api/v1/bank/account/${params.accountNumber}/transaction`,
    );
  }
}
