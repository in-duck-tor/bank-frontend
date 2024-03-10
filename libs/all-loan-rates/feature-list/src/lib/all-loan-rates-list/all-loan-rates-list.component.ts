import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LoanRateCardComponent, ShortLoanRate } from '@bnk/loan-rate/api';

@Component({
  selector: 'bnk-loan-rates-list',
  standalone: true,
  imports: [CommonModule, LoanRateCardComponent, HttpClientModule],
  templateUrl: './all-loan-rates-list.component.html',
  styleUrl: './all-loan-rates-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllLoanRatesListComponent {
  readonly http = inject(HttpClient);

  // TODO: убрать кринж
  readonly loanRates$ =
    this.http.get<ReadonlyArray<ShortLoanRate>>('loans/loan-rates');
}
