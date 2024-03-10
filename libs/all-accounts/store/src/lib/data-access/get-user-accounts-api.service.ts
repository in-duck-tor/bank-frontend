import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { AccountStatus, AccountType } from '@bnk/all-accounts/domain';

export interface AccountsSearchApiRequestParams {
  ownerId?: number | null;
  accountState?: AccountStatus | null;
}

export interface AccountApiResponse {
  number: string;
  currencyCode: string;
  bankCode: string;
  ownerId: number;
  createdBy: number;
  amount: number;
  state: AccountStatus;
  type: AccountType;
  customComment?: string | null;
}

export interface PaginationApiResponse<T> {
  total: number;
  items: Array<T>;
}

@Injectable()
export class GetAllUserAccountsApiService {
  private readonly http = inject(HttpClient);

  loadAccounts(searchParams: AccountsSearchApiRequestParams) {
    return this.http.put<PaginationApiResponse<AccountApiResponse>>(
      'http://89.19.214.8:8000/api/v1/bank/account/search',
      searchParams,
    );
  }
}
