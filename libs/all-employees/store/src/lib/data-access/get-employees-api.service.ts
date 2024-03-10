import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { EmployeeStatus } from '@bnk/employee/domain';

export interface EmployeesSearchApiRequestParams {
  status?: EmployeeStatus;
}

export interface EmployeeApiResponse {
  id: number;
  login: string;
  email?: string | null;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  inactiveAt?: string | null;
  isBlocked: boolean;
  position: ReadonlyArray<string>;
}

@Injectable()
export class GetEmployeesApiService {
  private readonly http = inject(HttpClient);

  loadEmployees(searchParams?: EmployeesSearchApiRequestParams) {
    return this.http.get<ReadonlyArray<EmployeeApiResponse>>(
      '/user/api/v1/employee',
    );
  }
}
