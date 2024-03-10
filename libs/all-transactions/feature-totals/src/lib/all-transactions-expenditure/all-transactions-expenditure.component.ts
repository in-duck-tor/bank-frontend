import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AllTransactionsStoreFacade } from '@bnk/all-transactions/store';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiFormatNumberPipeModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';

@Component({
  selector: 'bnk-all-transactions-expenditure',
  standalone: true,
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiFormatNumberPipeModule,
    TuiCurrencyPipeModule,
    TuiLetModule,
  ],
  templateUrl: './all-transactions-expenditure.component.html',
  styleUrl: './all-transactions-expenditure.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsExpenditureComponent {
  private readonly allTransactionsStoreFacade = inject(
    AllTransactionsStoreFacade,
  );

  readonly expenditure$ =
    this.allTransactionsStoreFacade.getAllTransactionsExpenditure();
}
