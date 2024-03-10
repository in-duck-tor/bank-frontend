import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { AllTransactionsStoreFacade } from '@bnk/all-transactions/store';
import { HeaderComponent } from '@bnk/shared/ui-layout-elements';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { BehaviorSubject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'bnk-all-transactions-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  providers: [TuiDestroyService],
  templateUrl: './all-transactions-layout.component.html',
  styleUrl: './all-transactions-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTransactionsLayoutComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroy$ = inject(TuiDestroyService);
  private readonly allTransactionsStoreFacade = inject(
    AllTransactionsStoreFacade,
  );

  readonly title$ = new BehaviorSubject<string | null>(null);

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .pipe(map(params => params['accountId']))
      .subscribe(accountNumber => {
        this.title$.next(`Операции по счёту №${accountNumber}`);
        this.allTransactionsStoreFacade.setAccountNumber(accountNumber);
      });
  }
}
