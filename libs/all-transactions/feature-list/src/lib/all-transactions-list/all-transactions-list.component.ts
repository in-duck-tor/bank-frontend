import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bnk-all-transactions-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-transactions-list.component.html',
  styleUrl: './all-transactions-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsListComponent {}
