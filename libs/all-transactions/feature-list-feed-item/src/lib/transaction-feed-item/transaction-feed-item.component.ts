import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import {
  TuiBadgeModule,
  TuiCellModule,
  TuiThumbnailCardModule,
} from '@taiga-ui/experimental';

import { Transaction, TransactionType } from '@bnk/all-transactions/domain';
import { TuiMapperPipeModule } from '@taiga-ui/cdk';
import { TuiFormatNumberPipeModule } from '@taiga-ui/core';

@Component({
  selector: 'bnk-transaction-feed-item',
  standalone: true,
  imports: [
    CommonModule,
    TuiCellModule,
    TuiBadgeModule,
    TuiCurrencyPipeModule,
    TuiMapperPipeModule,
    TuiFormatNumberPipeModule,
    TuiThumbnailCardModule,
  ],
  templateUrl: './transaction-feed-item.component.html',
  styleUrl: './transaction-feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionFeedItemComponent {
  @Input({ required: true }) transaction!: Transaction;
  @Input({ required: true }) currentAccountNumber!: string;

  readonly getAmountType = (
    transaction: Transaction,
  ): TransactionType.Deposit | TransactionType.Withdraw => {
    if (
      transaction.type === TransactionType.Deposit ||
      transaction.type === TransactionType.Withdraw
    ) {
      return transaction.type;
    }

    if (transaction.depositOn?.accountNumber === this.currentAccountNumber) {
      return TransactionType.Deposit;
    }

    return TransactionType.Withdraw;
  };
}
