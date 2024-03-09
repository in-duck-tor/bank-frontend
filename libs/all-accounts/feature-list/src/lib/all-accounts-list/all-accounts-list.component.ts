import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bnk-all-accounts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-accounts-list.component.html',
  styleUrl: './all-accounts-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAccountsListComponent {}
