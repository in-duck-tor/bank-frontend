import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, filter, map, switchMap, takeUntil } from 'rxjs';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  EmployeeFeedItemComponent,
  EmployeeStatus,
  ShortEmployee,
} from '@bnk/employee/api';
import { TuiDestroyService, tuiIsPresent } from '@taiga-ui/cdk';

@Component({
  selector: 'bnk-all-employees-list',
  standalone: true,
  imports: [CommonModule, EmployeeFeedItemComponent, HttpClientModule],
  providers: [TuiDestroyService],
  templateUrl: './all-employees-list.component.html',
  styleUrl: './all-employees-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllEmployeesListComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroy$ = inject(TuiDestroyService);
  private readonly http = inject(HttpClient);

  readonly employees$ = new BehaviorSubject<ShortEmployee[]>([]);

  ngOnInit() {
    const getEmployees = this.http
      .get<ShortEmployee[]>('http://localhost:8000/employees')
      .pipe(
        map(employees =>
          employees.map(employee => ({
            ...employee,
            status: employee.inactiveSince
              ? EmployeeStatus.Inactive
              : EmployeeStatus.Active,
          })),
        ),
      );

    this.route.data
      .pipe(
        map(data => data['status'] as EmployeeStatus),
        filter(tuiIsPresent),
        switchMap(status =>
          getEmployees.pipe(
            map(employees =>
              employees.filter(employee => employee.status == status),
            ),
          ),
        ),
        takeUntil(this.destroy$),
      )
      .subscribe(employees => {
        this.employees$.next(employees);
      });
  }
}
