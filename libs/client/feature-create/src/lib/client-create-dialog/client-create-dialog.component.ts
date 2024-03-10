import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  TuiMultiSelectModule,
} from '@taiga-ui/kit';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { BehaviorSubject } from 'rxjs';

interface ClientCreateFormValue {
  login: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  birthDate: TuiDay;
}

export interface ClientCreateResult {
  formValue: ClientCreateFormValue;
  onRequestError: () => void;
}

@Component({
  selector: 'bnk-client-create-dialog',
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
  ],
  templateUrl: './client-create-dialog.component.html',
  styleUrl: './client-create-dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCreateDialogComponent {
  private readonly context = inject(
    POLYMORPHEUS_CONTEXT,
  ) as TuiDialogContext<ClientCreateResult>;

  readonly maxDate = TuiDay.currentLocal();
  readonly minDate = this.maxDate.append({ year: -100 });

  readonly clientForm = new FormGroup({
    login: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
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
  });

  readonly loader$ = new BehaviorSubject<boolean>(false);

  onSubmit(): void {
    tuiMarkControlAsTouchedAndValidate(this.clientForm);

    if (this.clientForm.invalid) {
      return;
    }

    const formValue = this.clientForm.getRawValue();

    this.loader$.next(true);
    this.context.$implicit.next({
      onRequestError: () => this.onRequestError(),
      formValue: {
        login: formValue.login,
        firstName: formValue.firstName.trim(),
        lastName: formValue.lastName.trim(),
        middleName: formValue.middleName?.trim() ?? null,
        birthDate: formValue.birthDate!,
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
