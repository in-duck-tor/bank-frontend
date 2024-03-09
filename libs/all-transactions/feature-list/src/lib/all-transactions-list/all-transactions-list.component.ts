import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  Transaction,
  TransactionStatus,
  TransactionType,
} from '@bnk/all-transactions/domain';
import { AllTransactionsPeriodFilterComponent } from '@bnk/all-transactions/feature-filters';
import { TransactionFeedItemComponent } from '@bnk/all-transactions/feature-list-feed-item';
import {
  AllTransactionsExpenditureComponent,
  AllTransactionsReceiptsComponent,
} from '@bnk/all-transactions/feature-totals';

@Component({
  selector: 'bnk-all-transactions-list',
  standalone: true,
  imports: [
    CommonModule,
    AllTransactionsPeriodFilterComponent,
    AllTransactionsExpenditureComponent,
    AllTransactionsReceiptsComponent,
    TransactionFeedItemComponent,
  ],
  templateUrl: './all-transactions-list.component.html',
  styleUrl: './all-transactions-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsListComponent {
  readonly mock: Transaction[] = [
    {
      id: 1,
      type: TransactionType.Deposit,
      status: TransactionStatus.Commited,
      startedAt: '2023-10-10',
      finishedAt: '2023-10-10',
      depositOn: {
        amount: 100,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
    },
    {
      id: 2,
      type: TransactionType.Deposit,
      status: TransactionStatus.Canceled,
      startedAt: '2023-10-10',
      finishedAt: '2023-10-10',
      depositOn: {
        amount: 100,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
    },
    {
      id: 3,
      type: TransactionType.Deposit,
      status: TransactionStatus.Pending,
      startedAt: '2023-10-10',

      depositOn: {
        amount: 100,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
    },
    {
      id: 4,
      type: TransactionType.Withdraw,
      status: TransactionStatus.Commited,
      startedAt: '2023-10-10',
      finishedAt: '2023-10-10',
      withdrawFrom: {
        amount: 100,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
    },
    {
      id: 5,
      type: TransactionType.Withdraw,
      status: TransactionStatus.Pending,
      startedAt: '2023-10-10',

      withdrawFrom: {
        amount: 100000,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
    },
    {
      id: 6,
      type: TransactionType.Withdraw,
      status: TransactionStatus.Canceled,
      startedAt: '2023-10-10',
      finishedAt: '2023-10-10',
      withdrawFrom: {
        amount: 9020200,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
    },
    {
      id: 7,
      type: TransactionType.Transfer,
      status: TransactionStatus.Commited,
      startedAt: '2023-10-10',
      finishedAt: '2023-10-10',
      withdrawFrom: {
        amount: 100,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
      depositOn: {
        amount: 100,
        accountNumber: '00000111',
        currencyCode: 'RUB',
      },
    },
    {
      id: 7,
      type: TransactionType.Transfer,
      status: TransactionStatus.Pending,
      startedAt: '2023-10-10',
      withdrawFrom: {
        amount: 1234,
        accountNumber: '898989',
        currencyCode: 'RUB',
      },
      depositOn: {
        amount: 1234,
        accountNumber: '1010101',
        currencyCode: 'RUB',
      },
    },
  ];
}
