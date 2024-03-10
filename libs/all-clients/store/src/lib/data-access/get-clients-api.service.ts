import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { ClientStatus } from '@bnk/client/domain';

export interface ClientsSearchApiRequestParams {
  status?: ClientStatus;
}

export interface ClientApiResponse {
  id: number;
  login: string;
  email?: string | null;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  inactiveAt?: string | null;
  isBlocked: boolean;
}

@Injectable()
export class GetClientsApiService {
  private readonly http = inject(HttpClient);

  loadClients(searchParams?: ClientsSearchApiRequestParams) {
    return this.http.get<ReadonlyArray<ClientApiResponse>>(
      '/user/api/v1/client',
    );
  }
}
