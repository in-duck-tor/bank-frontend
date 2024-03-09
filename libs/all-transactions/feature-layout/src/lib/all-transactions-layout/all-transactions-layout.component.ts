import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bnk-all-transactions-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-transactions-layout.component.html',
  styleUrl: './all-transactions-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsLayoutComponent {}
