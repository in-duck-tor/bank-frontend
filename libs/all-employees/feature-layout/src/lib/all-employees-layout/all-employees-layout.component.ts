import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/experimental';

import { HttpClientModule } from '@angular/common/http';
import { AllEmployeesStoreFacade } from '@bnk/all-employees/store';
import { EmployeeCreateService } from '@bnk/employee/api';
import {
  HeaderComponent,
  NavigationItem,
} from '@bnk/shared/ui-layout-elements';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'bnk-all-employees-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule,
    TuiButtonModule,
    HttpClientModule,
  ],
  providers: [EmployeeCreateService, TuiDestroyService],
  templateUrl: './all-employees-layout.component.html',
  styleUrl: './all-employees-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllEmployeesLayoutComponent {
  private readonly employeeCreateService = inject(EmployeeCreateService);
  private readonly destroy$ = inject(TuiDestroyService);
  private readonly allEmployeesStoreFacade = inject(AllEmployeesStoreFacade);

  readonly navigationItems: NavigationItem[] = [
    {
      link: './active',
      title: 'Активные',
    },
    {
      link: './inactive',
      title: 'Неактивные',
    },
  ];

  openCreateDialog(): void {
    this.employeeCreateService
      .openDialog()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.allEmployeesStoreFacade.reload();
      });
  }
}
