import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  inject,
} from '@angular/core';

import { ShortEmployee } from '@bnk/employee/domain';
import { IAction, UserFeedItemComponent } from '@bnk/shared/ui-cards';
import { EmployeeFeedItemActionsService } from '../employee-feed-item-actions.service';

@Component({
  selector: 'bnk-employee-feed-item',
  standalone: true,
  imports: [CommonModule, UserFeedItemComponent],
  providers: [EmployeeFeedItemActionsService],
  templateUrl: './employee-feed-item.component.html',
  styleUrl: './employee-feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFeedItemComponent implements OnChanges {
  private readonly employeeFeedItemActionsService = inject(
    EmployeeFeedItemActionsService,
  );

  @Input({ required: true }) employee!: ShortEmployee;
  @Output() action = new EventEmitter<void>();

  actions: IAction[] = [];

  get fullName(): string {
    return `${this.employee.lastName} ${this.employee.firstName} ${
      this.employee.middleName ?? ''
    }`;
  }

  get position(): string | null {
    return this.employee.position?.join(' • ') ?? null;
  }

  get isBlocked(): boolean {
    return this.employee.isBlocked && !this.employee.inactiveSince;
  }

  get tooltipText(): string | null {
    return this.employee.inactiveSince
      ? `Неактивен с ${this.employee.inactiveSince}`
      : null;
  }

  ngOnChanges(): void {
    this.actions = this.employeeFeedItemActionsService.getActions(
      this.employee,
      this.action,
    );
  }
}
