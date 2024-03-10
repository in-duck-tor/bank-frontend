import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AllTransactionsPeriodFilterComponent } from '@bnk/all-transactions/feature-filters';
import { TransactionFeedItemComponent } from '@bnk/all-transactions/feature-list-feed-item';
import {
  AllTransactionsExpenditureComponent,
  AllTransactionsReceiptsComponent,
} from '@bnk/all-transactions/feature-totals';

import { AllTransactionsStoreFacade } from '@bnk/all-transactions/store';

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
  private readonly allTransactionsStoreFacade = inject(
    AllTransactionsStoreFacade,
  );

  readonly transactions$ = this.allTransactionsStoreFacade.getAllTransactions();
  readonly accountNumber$ = this.allTransactionsStoreFacade.getAccountNumber();
}
