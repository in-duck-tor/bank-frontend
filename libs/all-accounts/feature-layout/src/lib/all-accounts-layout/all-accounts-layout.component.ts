import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { TuiButtonModule } from '@taiga-ui/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  HeaderComponent,
  NavigationItem,
} from '@bnk/shared/ui-layout-elements';
import { ROUTER_PATHS } from '@bnk/shared/util-navigation';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { BehaviorSubject, takeUntil } from 'rxjs';

@Component({
  selector: 'bnk-all-accounts-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, TuiButtonModule],
  providers: [TuiDestroyService],
  templateUrl: './all-accounts-layout.component.html',
  styleUrl: './all-accounts-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAccountsLayoutComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroy$ = inject(TuiDestroyService);

  readonly navigationItems: NavigationItem[] = [
    {
      link: ROUTER_PATHS.accountsActive,
      title: 'Активные',
    },
    {
      link: ROUTER_PATHS.accountsClosed,
      title: 'Закрытые',
    },
  ];

  readonly title$ = new BehaviorSubject<string | null>(null);

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      console.log(params['clientId']);
    });
  }
}
