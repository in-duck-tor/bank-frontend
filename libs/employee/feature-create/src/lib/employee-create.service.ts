import { Injectable, Injector, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Observable, take, tap } from 'rxjs';

import {
  EmployeeCreateDialogComponent,
  EmployeeCreateResult,
} from './employee-create-dialog';

@Injectable()
export class EmployeeCreateService {
  private readonly tuiDialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);

  openDialog(): Observable<EmployeeCreateResult> {
    return this.tuiDialogService
      .open<EmployeeCreateResult>(
        new PolymorpheusComponent(EmployeeCreateDialogComponent, this.injector),
        {
          dismissible: true,
          label: 'Новый сотрудник',
        },
      )
      .pipe(
        tap(({ onRequestError }) => {
          onRequestError();
        }),
        take(1),
      );
  }
}
