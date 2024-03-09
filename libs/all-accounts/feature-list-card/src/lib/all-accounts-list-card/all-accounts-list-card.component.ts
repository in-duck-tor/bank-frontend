import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiMapperPipeModule, tuiPure } from '@taiga-ui/cdk';
import { TuiHintModule, TuiSvgModule } from '@taiga-ui/core';

import { TuiFormatNumberPipeModule } from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiCardModule,
  TuiCellModule,
  TuiSurfaceModule,
  TuiThumbnailCardModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';

import { Account, AccountStatus, AccountType } from '@bnk/all-accounts/domain';

@Component({
  selector: 'bnk-all-accounts-list-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiCardModule,
    TuiCellModule,
    TuiSurfaceModule,
    TuiAvatarModule,
    TuiThumbnailCardModule,
    TuiCurrencyPipeModule,
    TuiTitleModule,
    TuiMapperPipeModule,
    TuiSvgModule,
    TuiFormatNumberPipeModule,
    TuiHintModule,
  ],
  templateUrl: './all-accounts-list-card.component.html',
  styleUrl: './all-accounts-list-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAccountsListCardComponent {
  @Input({ required: true }) account!: Account;

  @tuiPure
  get transactionsPath(): string[] {
    return ['../', `${this.account.number}`];
  }

  @tuiPure
  getAvatarIcon(account: Account): string {
    switch (account.type) {
      case AccountType.Payment:
        return 'tuiIconDollarSignLarge';

      case AccountType.Loan:
        return 'tuiIconDivideLarge';
    }
  }

  @tuiPure
  getStatusIcon(account: Account): string {
    switch (account.state) {
      case AccountStatus.Frozen:
        return 'tuiIconEyeOff';

      case AccountStatus.Closed:
        return 'tuiIconLock';
    }

    return '';
  }

  @tuiPure
  getStatusTooltip(account: Account): string {
    switch (account.state) {
      case AccountStatus.Frozen:
        return 'Замороженый';

      case AccountStatus.Closed:
        return 'Закрытый';

      case AccountStatus.Active:
        return 'Активный';
    }
  }

  @tuiPure
  getTypeText(account: Account): string {
    switch (account.type) {
      case AccountType.Payment:
        return 'Платёжный';

      case AccountType.Loan:
        return 'Расчётный';
    }
  }
}
