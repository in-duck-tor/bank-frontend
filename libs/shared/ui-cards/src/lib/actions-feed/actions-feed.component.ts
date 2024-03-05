import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiDataListModule, TuiHostedDropdownModule } from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiButtonModule,
  TuiCellModule,
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
  ],
  templateUrl: './actions-feed.component.html',
  styleUrl: './actions-feed.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsFeedComponent {
  @Input() actions: IAction[] = [];
  @Input() title = '';
  @Input() subTitle = '';
  @Input() avatarSrc: string | null = null;

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
