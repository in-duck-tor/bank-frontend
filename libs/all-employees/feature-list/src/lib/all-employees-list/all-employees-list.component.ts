import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  EmployeeFeedItemComponent,
  EmployeeStatus,
  ShortEmployee,
} from '@bnk/employee/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bnk-all-employees-list',
  standalone: true,
  imports: [CommonModule, EmployeeFeedItemComponent],
  templateUrl: './all-employees-list.component.html',
  styleUrl: './all-employees-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllEmployeesListComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly mock$ = new BehaviorSubject<ShortEmployee[]>([]);

  readonly mocks: Record<EmployeeStatus, ShortEmployee[]> = {
    [EmployeeStatus.Active]: [
      {
        id: 1,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        middleName: 'Васильевна',
        position: 'Консультант',
        blockedUntil: '12-12-12',
        status: EmployeeStatus.Active,
      },
      {
        id: 1,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        status: EmployeeStatus.Active,
      },
    ],
    [EmployeeStatus.Inactive]: [
      {
        id: 3,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        middleName: 'Васильевна',
        position: 'Консультант',
        blockedUntil: '12-12-12',
        inactiveSince: '13-13-13',
        status: EmployeeStatus.Inactive,
      },
      {
        id: 4,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        inactiveSince: '13-13-13',
        status: EmployeeStatus.Inactive,
      },
    ],
  };

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.mock$.next(
        data['status'] ? this.mocks[data['status'] as EmployeeStatus] : [],
      );
    });
  }
}
