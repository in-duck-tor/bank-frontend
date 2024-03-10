import { Injectable, Injector, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { switchMap, take, tap } from 'rxjs';

import {
  ClientCreateDialogComponent,
  ClientCreateResult,
} from './client-create-dialog';
import { CreateClientApiService } from './data-access/create-client-api.service';

@Injectable()
export class ClientCreateService {
  private readonly tuiDialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);
  private readonly createClientApiService = inject(CreateClientApiService);

  openDialog() {
    return this.tuiDialogService
      .open<ClientCreateResult>(
        new PolymorpheusComponent(ClientCreateDialogComponent, this.injector),
        {
          dismissible: true,
          label: 'Новый клиент',
        },
      )
      .pipe(
        tap(a => console.log(a.formValue.birthDate.toUtcNativeDate().toJSON())),
        switchMap(({ formValue }) =>
          this.createClientApiService.create({
            login: formValue.login,
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            middleName: formValue.middleName,
            birthDate: formValue.birthDate.toUtcNativeDate().toJSON(),
          }),
        ),
        take(1),
      );
  }
}
