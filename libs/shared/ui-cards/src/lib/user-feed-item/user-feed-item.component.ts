import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiDataListModule, TuiHostedDropdownModule } from '@taiga-ui/core';
import {
  TuiAutoColorModule,
  TuiAvatarModule,
  TuiBadgeModule,
  TuiButtonModule,
  TuiCellModule,
  TuiInitialsModule,
  TuiTitleModule,
  TuiTooltipModule,
} from '@taiga-ui/experimental';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';

export interface IAction {
  icon?: string;
  name: string;
  onClick?: () => void;
}

@Component({
  selector: 'bnk-user-feed-item',
  standalone: true,
  imports: [
    CommonModule,
    TuiCellModule,
    TuiHostedDropdownModule,
    TuiDataListWrapperModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiDataListModule,
    TuiTitleModule,
    TuiBadgeModule,
    TuiInitialsModule,
    TuiAutoColorModule,
    TuiTooltipModule,
  ],
  templateUrl: './user-feed-item.component.html',
  styleUrl: './user-feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFeedItemComponent {
  @Input() actions: IAction[] = [];
  @Input() title = '';
  @Input() subTitle: string | null = null;
  @Input() avatar: { src?: string | null; name?: string | null } | null = null;
  @Input() isBlocked = false;
  @Input() tooltipText: string | null = null;

  onClickWrapper(
    closeHandler: () => void,
    actionClickHandler?: () => void,
  ): void {
    if (actionClickHandler) {
      actionClickHandler();
    }
    closeHandler();
  }
}
