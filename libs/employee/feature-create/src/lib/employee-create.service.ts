import { Injectable, Injector, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { switchMap, take } from 'rxjs';

import { CreateEmployeeApiService } from './data-access/create-employee-api.service';
import {
  EmployeeCreateDialogComponent,
  EmployeeCreateResult,
} from './employee-create-dialog';

@Injectable()
export class EmployeeCreateService {
  private readonly tuiDialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);
  private readonly createEmployeeApiService = inject(CreateEmployeeApiService);

  openDialog() {
    return this.tuiDialogService
      .open<EmployeeCreateResult>(
        new PolymorpheusComponent(EmployeeCreateDialogComponent, this.injector),
        {
          dismissible: true,
          label: 'Новый сотрудник',
        },
      )
      .pipe(
        switchMap(({ formValue }) =>
          this.createEmployeeApiService.create({
            login: formValue.login,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            middleName: formValue.middleName,
            birthDate: formValue.birthDate.toUtcNativeDate().toJSON(),
            position: formValue.position,
            permissions: formValue.permissions,
          }),
        ),
        take(1),
      );
  }
}
