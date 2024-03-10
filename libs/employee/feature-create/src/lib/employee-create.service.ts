import { Injectable, Injector, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { switchMap, take } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {
  EmployeeCreateDialogComponent,
  EmployeeCreateResult,
} from './employee-create-dialog';

@Injectable()
export class EmployeeCreateService {
  private readonly tuiDialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);
  private readonly http = inject(HttpClient);

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
        switchMap(result => this.create(result.formValue)),
        take(1),
      );
  }

  private create(request: EmployeeCreateResult['formValue']) {
    return this.http.post('http://localhost:8000/employees', request);
  }
}
