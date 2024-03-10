import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { tuiMarkControlAsTouchedAndValidate } from '@taiga-ui/cdk';
import { TuiDialogContext, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/experimental';

import { TuiInputModule, TuiInputNumberModule } from '@taiga-ui/kit';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { BehaviorSubject } from 'rxjs';

interface LoanRateCreateFormValue {
  name: string;
  interestRate: number;
}

export interface LoanRateCreateResult {
  formValue: LoanRateCreateFormValue;
  onRequestError: () => void;
}

@Component({
  selector: 'bnk-loan-rate-create-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiInputModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './loan-rate-create-dialog.component.html',
  styleUrl: './loan-rate-create-dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanRateCreateDialogComponent {
  private readonly context = inject(
    POLYMORPHEUS_CONTEXT,
  ) as TuiDialogContext<LoanRateCreateResult>;

  readonly loanRateForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    interestRate: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  readonly loader$ = new BehaviorSubject<boolean>(false);

  onSubmit(): void {
    tuiMarkControlAsTouchedAndValidate(this.loanRateForm);

    if (this.loanRateForm.invalid) {
      return;
    }

    const formValue = this.loanRateForm.getRawValue();

    this.loader$.next(true);
    this.context.$implicit.next({
      onRequestError: () => this.onRequestError(),
      formValue: {
        name: formValue.name.trim(),
        interestRate: formValue.interestRate ?? 0,
      },
    });
  }

  onCancel(): void {
    this.context.$implicit.complete();
  }

  private onRequestError(): void {
    this.loader$.next(false);
  }
}
