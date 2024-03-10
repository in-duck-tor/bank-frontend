import { Injectable, Injector, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { switchMap, take } from 'rxjs';

import { CreateLoanRateApiService } from './data-access/create-loan-rate-api.service';
import {
  LoanRateCreateDialogComponent,
  LoanRateCreateResult,
} from './loan-rate-create-dialog';

@Injectable()
export class LoanRateCreateService {
  private readonly tuiDialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);
  private readonly createLoanRateApiService = inject(CreateLoanRateApiService);

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
        switchMap(({ formValue }) =>
          this.createLoanRateApiService.create({
            name: formValue.name,
            interestRate: formValue.interestRate,
          }),
        ),
        take(1),
      );
  }
}
