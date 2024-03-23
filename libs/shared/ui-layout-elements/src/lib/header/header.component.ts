import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@bnk/shared/util-theme';
import {
  TuiDataListModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiBadgeModule,
  TuiBadgeNotificationModule,
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';
import {
  PolymorpheusContent,
  PolymorpheusModule,
} from '@tinkoff/ng-polymorpheus';

export interface NavigationItem {
  link: string;
  title: string;
}

@Component({
  selector: 'bnk-header',
  standalone: true,
  imports: [
    CommonModule,
    TuiNavigationModule,
    TuiIconModule,
    TuiBadgeModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiBadgeNotificationModule,
    TuiAvatarModule,
    TuiExpandModule,
    TuiTabsModule,
    TuiButtonModule,
    TuiTitleModule,
    PolymorpheusModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly nightMode$ = inject(ThemeService);

  @Input() title: string | null = null;
  @Input() rightContent: PolymorpheusContent;
  @Input() navigationItems: NavigationItem[] = [];

  get themeIcon(): 'tuiIconMoon' | 'tuiIconSun' {
    return this.nightMode$.value ? 'tuiIconSun' : 'tuiIconMoon';
  }

  toggleTheme(): void {
    this.nightMode$.toggle();
  }
}
