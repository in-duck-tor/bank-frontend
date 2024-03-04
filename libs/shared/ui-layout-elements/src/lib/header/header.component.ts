import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    PolymorpheusModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() title = '';
  @Input() rightContent: PolymorpheusContent;
  @Input() navigationItems: NavigationItem[] = [];
}
