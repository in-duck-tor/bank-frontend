import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, switchMap } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { AllEmployeesStoreFacade } from '@bnk/all-employees/store';
import { EmployeeFeedItemComponent, EmployeeStatus } from '@bnk/employee/api';

@Component({
  selector: 'bnk-all-employees-list',
  standalone: true,
  imports: [CommonModule, EmployeeFeedItemComponent, HttpClientModule],
  templateUrl: './all-employees-list.component.html',
  styleUrl: './all-employees-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllEmployeesListComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly allEmployeesStoreFacade = inject(AllEmployeesStoreFacade);

  readonly employees$ = this.route.data.pipe(
    map(data => data['status'] as EmployeeStatus),
    switchMap(status => {
      switch (status) {
        case EmployeeStatus.Active:
          return this.allEmployeesStoreFacade.getActiveEmployee();
        case EmployeeStatus.Inactive:
          return this.allEmployeesStoreFacade.getInactiveEmployee();
        default:
          return EMPTY;
      }
    }),
  );

  reload() {
    this.allEmployeesStoreFacade.reload();
  }
}
