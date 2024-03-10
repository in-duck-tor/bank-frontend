import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface CreateLoanRateApiRequest {
  name: string;
  interestRate: number;
}

@Injectable()
export class CreateLoanRateApiService {
  private readonly http = inject(HttpClient);

  create(req: CreateLoanRateApiRequest) {
    return this.http.post('/loans/loan-rates', req);
  }
}
