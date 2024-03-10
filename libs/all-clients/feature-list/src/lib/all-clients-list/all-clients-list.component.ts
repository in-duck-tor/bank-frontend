import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, switchMap } from 'rxjs';

import { ClientFeedItemComponent, ClientStatus } from '@bnk/client/api';

import { AllClientsStoreFacade } from '@bnk/all-clients/store';

@Component({
  selector: 'bnk-all-clients-list',
  standalone: true,
  imports: [CommonModule, ClientFeedItemComponent],
  templateUrl: './all-clients-list.component.html',
  styleUrl: './all-clients-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllClientsListComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly allClientsStoreFacade = inject(AllClientsStoreFacade);

  readonly clients$ = this.route.data.pipe(
    map(data => data['status'] as ClientStatus),
    switchMap(status => {
      switch (status) {
        case ClientStatus.Active:
          return this.allClientsStoreFacade.getActiveClients();
        case ClientStatus.Inactive:
          return this.allClientsStoreFacade.getInactiveClients();
        default:
          return EMPTY;
      }
    }),
  );

  reload() {
    this.allClientsStoreFacade.reload();
  }
}
