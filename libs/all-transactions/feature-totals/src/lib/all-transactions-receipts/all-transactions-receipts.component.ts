import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
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
  ],
  templateUrl: './all-transactions-receipts.component.html',
  styleUrl: './all-transactions-receipts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsReceiptsComponent {}
