import { Injectable, Injector, inject } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Observable, take, tap } from 'rxjs';

import {
  ClientCreateDialogComponent,
  ClientCreateResult,
} from './client-create-dialog';

@Injectable()
export class ClientCreateService {
  private readonly tuiDialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);

  openDialog(): Observable<ClientCreateResult> {
    return this.tuiDialogService
      .open<ClientCreateResult>(
        new PolymorpheusComponent(ClientCreateDialogComponent, this.injector),
        {
          dismissible: true,
          label: 'Новый клиент',
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
