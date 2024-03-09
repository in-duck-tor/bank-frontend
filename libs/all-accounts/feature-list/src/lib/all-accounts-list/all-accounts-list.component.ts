import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Account, AccountStatus } from '@bnk/all-accounts/domain';
import { AllAccountsListCardComponent } from '@bnk/all-accounts/feature-list-card';

@Component({
  selector: 'bnk-all-accounts-list',
  standalone: true,
  imports: [CommonModule, AllAccountsListCardComponent],
  templateUrl: './all-accounts-list.component.html',
  styleUrl: './all-accounts-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAccountsListComponent {
  readonly mock: Account[] = [
    {
      number: 1111145451,
      currencyCode: 'RUB',
      amount: 200,
      state: AccountStatus.Active,
      comment: 'На подарок',
    },
    {
      number: 111111,
      currencyCode: 'USD',
      amount: 10000000,
      state: AccountStatus.Active,
    },
    {
      number: 111111,
      amount: 0,
      state: AccountStatus.Frozen,
    },
    {
      number: 111111,
      amount: 0,
      state: AccountStatus.Closed,
    },
  ];
}
