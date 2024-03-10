import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import {
  TuiDay,
  TuiLetModule,
  tuiMarkControlAsTouchedAndValidate,
} from '@taiga-ui/cdk';
import { TuiDialogContext } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/experimental';
import {
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputTagModule,
  TuiMultiSelectModule,
} from '@taiga-ui/kit';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

interface EmployeeCreateFormValue {
  email: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  birthDate: TuiDay;
  position: string[];
  permissions: string[];
}

export interface EmployeeCreateResult {
  formValue: EmployeeCreateFormValue;
  onRequestError: () => void;
}

@Component({
  selector: 'bnk-employee-create-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    TuiInputDateModule,
    TuiMultiSelectModule,
    TuiDataListWrapperModule,
    TuiLetModule,
    TuiInputTagModule,
  ],
  templateUrl: './employee-create-dialog.component.html',
  styleUrl: './employee-create-dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCreateDialogComponent {
  private readonly context = inject(
    POLYMORPHEUS_CONTEXT,
  ) as TuiDialogContext<EmployeeCreateResult>;

  readonly maxDate = TuiDay.currentLocal();
  readonly minDate = this.maxDate.append({ year: -100 });
  readonly items$ = new BehaviorSubject<string[]>([
    'Редактирование пользователей',
  ]);

  readonly employeeForm = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    firstName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    middleName: new FormControl<string | null>(''),
    birthDate: new FormControl<TuiDay | null>(null, {
      validators: [Validators.required],
    }),
    position: new FormControl<string[]>([], { nonNullable: true }),
    permissions: new FormControl<string[]>([], { nonNullable: true }),
  });

  readonly loader$ = new BehaviorSubject<boolean>(false);

  onSubmit(): void {
    tuiMarkControlAsTouchedAndValidate(this.employeeForm);

    if (this.employeeForm.invalid) {
      return;
    }

    const formValue = this.employeeForm.getRawValue();

    this.loader$.next(true);
    this.context.$implicit.next({
      onRequestError: () => this.onRequestError(),
      formValue: {
        email: formValue.email,
        firstName: formValue.firstName.trim(),
        lastName: formValue.lastName.trim(),
        middleName: formValue.middleName?.trim() ?? null,
        birthDate: formValue.birthDate!,
        position: formValue.position,
        permissions: formValue.permissions,
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
