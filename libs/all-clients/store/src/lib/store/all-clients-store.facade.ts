import { Injectable, inject } from '@angular/core';
import { ClientStatus, ShortClient } from '@bnk/client/domain';
import { Observable, Subject, map, startWith, switchMap } from 'rxjs';
import { GetClientsApiService } from '../data-access/get-clients-api.service';

@Injectable()
export class AllClientsStoreFacade {
  private readonly getClientsApiService = inject(GetClientsApiService);

  private readonly reload$ = new Subject();

  getAllClients(): Observable<ReadonlyArray<ShortClient>> {
    return this.reload$.pipe(
      startWith(true),
      switchMap(() =>
        this.getClientsApiService.loadClients().pipe(
          map(clients =>
            clients.map(client => ({
              id: client.id,
              login: client.login,
              email: client.email,
              firstName: client.firstName,
              lastName: client.lastName,
              middleName: client.middleName,
              isBlocked: client.isBlocked,
              inactiveSince: client.inactiveAt,
              status: client.inactiveAt
                ? ClientStatus.Inactive
                : ClientStatus.Active,
            })),
          ),
        ),
      ),
    );
  }

  reload() {
    this.reload$.next(true);
  }

  getActiveClients() {
    return this.getAllClients().pipe(
      map(clients =>
        clients.filter(client => client.status === ClientStatus.Active),
      ),
    );
  }

  getInactiveClients() {
    return this.getAllClients().pipe(
      map(clients =>
        clients.filter(client => client.status === ClientStatus.Inactive),
      ),
    );
  }
}
