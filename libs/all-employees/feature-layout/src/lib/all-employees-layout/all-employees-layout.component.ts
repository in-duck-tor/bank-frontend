import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeaderComponent,
  NavigationItem,
} from '@bnk/shared/ui-layout-elements';
import { TuiButtonModule } from '@taiga-ui/experimental';

@Component({
  selector: 'bnk-all-employees-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, TuiButtonModule],
  templateUrl: './all-employees-layout.component.html',
  styleUrl: './all-employees-layout.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllEmployeesLayoutComponent {
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
}
