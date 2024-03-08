import { Injectable, Injector, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

import { take, tap } from 'rxjs';
import {
  LoanRateCreateDialogComponent,
  LoanRateCreateResult,
} from './loan-rate-create-dialog';

@Injectable()
export class LoanRateCreateService {
  private readonly tuiDialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);

  openDialog() {
    return this.tuiDialogService
      .open<LoanRateCreateResult>(
        new PolymorpheusComponent(LoanRateCreateDialogComponent, this.injector),
        {
          dismissible: true,
          label: 'Новый тариф',
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
