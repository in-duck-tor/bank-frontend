import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { takeUntil } from 'rxjs';

import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/experimental';

import { ClientCreateService } from '@bnk/client/api';
import {
  HeaderComponent,
  NavigationItem,
} from '@bnk/shared/ui-layout-elements';

@Component({
  selector: 'bnk-all-clients-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, TuiButtonModule],
  providers: [TuiDestroyService, ClientCreateService],
  templateUrl: './all-clients-layout.component.html',
  styleUrl: './all-clients-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllClientsLayoutComponent {
  private readonly clientCreateService = inject(ClientCreateService);
  private readonly destroy$ = inject(TuiDestroyService);

  readonly navigationItems: NavigationItem[] = [
    {
      link: './active',
      title: 'Активные',
    },
    {
      link: './inactive',
      title: 'Неактивные',
    },
  ];

  openCreateDialog(): void {
    this.clientCreateService
      .openDialog()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
