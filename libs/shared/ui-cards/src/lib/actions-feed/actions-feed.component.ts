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
} from '@taiga-ui/experimental';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';

export interface IAction {
  icon?: string;
  name: string;
  onClick?: () => void;
}

@Component({
  selector: 'bnk-actions-feed',
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
  ],
  templateUrl: './actions-feed.component.html',
  styleUrl: './actions-feed.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsFeedComponent {
  @Input() actions: IAction[] = [];
  @Input() title = '';
  @Input() subTitle = '';
  @Input() avatar: { src?: string | null; name?: string | null } | null = null;

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
