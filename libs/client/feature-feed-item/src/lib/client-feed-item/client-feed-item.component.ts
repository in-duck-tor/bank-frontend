import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  inject,
} from '@angular/core';

import { ShortClient } from '@bnk/client/domain';
import { IAction, UserFeedItemComponent } from '@bnk/shared/ui-cards';
import { ClientFeedItemActionsService } from '../client-feed-item-actions.service';

@Component({
  selector: 'bnk-client-feed-item',
  standalone: true,
  imports: [CommonModule, UserFeedItemComponent],
  providers: [ClientFeedItemActionsService],
  templateUrl: './client-feed-item.component.html',
  styleUrl: './client-feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFeedItemComponent implements OnChanges {
  private readonly clientFeedItemActionsService = inject(
    ClientFeedItemActionsService,
  );

  @Input({ required: true }) client!: ShortClient;

  actions: IAction[] = [];

  get fullName(): string {
    return `${this.client.lastName} ${this.client.firstName} ${
      this.client.middleName ?? ''
    }`;
  }

  get isBlocked(): boolean {
    return !!this.client.blockedUntil && !this.client.inactiveSince;
  }

  get tooltipText(): string | null {
    return this.client.inactiveSince
      ? `Неактивен с ${this.client.inactiveSince}`
      : null;
  }

  ngOnChanges(): void {
    this.actions = this.clientFeedItemActionsService.getActions(this.client);
  }
}
