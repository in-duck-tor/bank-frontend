import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ShortLoanRate } from '@bnk/loan-rate/domain';
import {
  TuiBadgeModule,
  TuiCardModule,
  TuiIconModule,
  TuiSurfaceModule,
} from '@taiga-ui/experimental';

@Component({
  selector: 'bnk-loan-rate-card',
  standalone: true,
  imports: [
    CommonModule,
    TuiCardModule,
    TuiBadgeModule,
    TuiIconModule,
    TuiSurfaceModule,
  ],
  templateUrl: './loan-rate-card.component.html',
  styleUrl: './loan-rate-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanRateCardComponent {
  @Input({ required: true }) loanRate!: ShortLoanRate;
}
