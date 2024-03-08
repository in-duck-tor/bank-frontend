import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TuiButtonModule } from '@taiga-ui/experimental';

import { LoanRateCreateService } from '@bnk/loan-rate/api';
import { HeaderComponent } from '@bnk/shared/ui-layout-elements';

@Component({
  selector: 'bnk-loan-rates-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, TuiButtonModule],
  providers: [LoanRateCreateService],
  templateUrl: './all-loan-rates-layout.component.html',
  styleUrl: './all-loan-rates-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllLoanRatesLayoutComponent {
  private readonly loanRateCreateService = inject(LoanRateCreateService);

  openCreateDialog(): void {
    this.loanRateCreateService.openDialog().subscribe();
  }
}
