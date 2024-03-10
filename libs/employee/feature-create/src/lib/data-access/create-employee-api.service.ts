import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface CreateEmployeeApiRequest {
  login: string;
  email?: string | null;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  birthDate?: string | null;
  position: ReadonlyArray<string>;
  permissions: ReadonlyArray<string>;
}

@Injectable()
export class CreateEmployeeApiService {
  private readonly http = inject(HttpClient);

  create(req: CreateEmployeeApiRequest) {
    return this.http.post('/user/api/v1/employee', req);
  }
}
