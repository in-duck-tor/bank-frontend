import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface CreateClientApiRequest {
  login: string;
  email?: string | null;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  birthDate?: string | null;
}

@Injectable()
export class CreateClientApiService {
  private readonly http = inject(HttpClient);

  create(req: CreateClientApiRequest) {
    return this.http.post('/user/api/v1/client', req);
  }
}
