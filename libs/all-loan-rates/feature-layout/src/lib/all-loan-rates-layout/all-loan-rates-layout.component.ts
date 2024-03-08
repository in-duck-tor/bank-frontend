import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TuiButtonModule } from '@taiga-ui/experimental';

import { HeaderComponent } from '@bnk/shared/ui-layout-elements';

@Component({
  selector: 'bnk-loan-rates-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, TuiButtonModule],
  templateUrl: './all-loan-rates-layout.component.html',
  styleUrl: './all-loan-rates-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllLoanRatesLayoutComponent {}
