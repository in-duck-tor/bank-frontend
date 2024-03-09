import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, takeUntil } from 'rxjs';

import {
  ClientFeedItemComponent,
  ClientStatus,
  ShortClient,
} from '@bnk/client/api';
import { TuiDestroyService } from '@taiga-ui/cdk';

@Component({
  selector: 'bnk-all-clients-list',
  standalone: true,
  imports: [CommonModule, ClientFeedItemComponent],
  providers: [TuiDestroyService],
  templateUrl: './all-clients-list.component.html',
  styleUrl: './all-clients-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllClientsListComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroy$ = inject(TuiDestroyService);

  readonly mock$ = new BehaviorSubject<ShortClient[]>([]);

  readonly mocks: Record<ClientStatus, ShortClient[]> = {
    [ClientStatus.Active]: [
      {
        id: 1,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        middleName: 'Васильевна',
        birthDate: '2003-01-01',
        blockedUntil: '12-12-12',
        status: ClientStatus.Active,
      },
      {
        id: 1,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        birthDate: '2003-01-01',
        status: ClientStatus.Active,
      },
    ],
    [ClientStatus.Inactive]: [
      {
        id: 3,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        middleName: 'Васильевна',
        birthDate: '2003-01-01',
        blockedUntil: '12-12-12',
        inactiveSince: '13-13-13',
        status: ClientStatus.Inactive,
      },
      {
        id: 4,
        email: 'alyonta',
        firstName: 'Алёна',
        lastName: 'Тарасова',
        birthDate: '2003-01-01',
        inactiveSince: '13-13-13',
        status: ClientStatus.Inactive,
      },
    ],
  };

  ngOnInit() {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.mock$.next(
        data['status'] ? this.mocks[data['status'] as ClientStatus] : [],
      );
    });
  }
}
