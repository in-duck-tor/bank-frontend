import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LoanRateCardComponent, ShortLoanRate } from '@bnk/loan-rate/api';

@Component({
  selector: 'bnk-loan-rates-list',
  standalone: true,
  imports: [CommonModule, LoanRateCardComponent],
  templateUrl: './all-loan-rates-list.component.html',
  styleUrl: './all-loan-rates-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllLoanRatesListComponent {
  mock: ShortLoanRate[] = [
    {
      id: 1,
      title: '1 тариф',
      interestRate: 12,
    },
    {
      id: 2,
      title: '2 тариф',
      interestRate: 30,
    },
    {
      id: 3,
      title: '3 тариф',
      interestRate: 10,
    },
    {
      id: 4,
      title: '4 тариф',
      interestRate: 15,
    },
  ];
}
