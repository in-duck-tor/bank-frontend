import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountStatus } from '@bnk/all-accounts/domain';

import { AllAccountsListCardComponent } from '@bnk/all-accounts/feature-list-card';
import { EMPTY, map, switchMap } from 'rxjs';

import { AllAccountsStoreFacade } from '@bnk/all-accounts/store';

@Component({
  selector: 'bnk-all-accounts-list',
  standalone: true,
  imports: [CommonModule, AllAccountsListCardComponent],
  templateUrl: './all-accounts-list.component.html',
  styleUrl: './all-accounts-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAccountsListComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly allAccountsStoreFacade = inject(AllAccountsStoreFacade);

  readonly accounts$ = this.route.data.pipe(
    map(data => data['status'] as AccountStatus),
    switchMap(status => {
      switch (status) {
        case AccountStatus.Active:
          return this.allAccountsStoreFacade.getActiveAccounts();
        case AccountStatus.Closed:
          return this.allAccountsStoreFacade.getClosedAccounts();
        default:
          return EMPTY;
      }
    }),
  );
}
