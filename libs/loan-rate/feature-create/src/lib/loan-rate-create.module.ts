import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CreateLoanRateApiService } from './data-access/create-loan-rate-api.service';
import { LoanRateCreateService } from './loan-rate-create.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CreateLoanRateApiService, LoanRateCreateService],
})
export class LoanRateCreateModule {}
