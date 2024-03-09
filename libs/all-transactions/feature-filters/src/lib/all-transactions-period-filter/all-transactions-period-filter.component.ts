import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiInputDateRangeModule } from '@taiga-ui/kit';

@Component({
  selector: 'bnk-all-transactions-period-filter',
  standalone: true,
  imports: [CommonModule, TuiInputDateRangeModule],
  templateUrl: './all-transactions-period-filter.component.html',
  styleUrl: './all-transactions-period-filter.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsPeriodFilterComponent {}
