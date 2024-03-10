import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AllTransactionsStoreFacade } from '@bnk/all-transactions/store';

import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiFormatNumberPipeModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';

@Component({
  selector: 'bnk-all-transactions-receipts',
  standalone: true,
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiFormatNumberPipeModule,
    TuiCurrencyPipeModule,
    TuiLetModule,
  ],
  templateUrl: './all-transactions-receipts.component.html',
  styleUrl: './all-transactions-receipts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsReceiptsComponent {
  private readonly allTransactionsStoreFacade = inject(
    AllTransactionsStoreFacade,
  );

  readonly receipts$ =
    this.allTransactionsStoreFacade.getAllTransactionsReceipts();
}
