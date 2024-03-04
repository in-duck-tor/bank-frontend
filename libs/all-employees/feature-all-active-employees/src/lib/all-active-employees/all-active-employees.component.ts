import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiHostedDropdownModule } from '@taiga-ui/core';
import { TuiButtonModule, TuiCellModule } from '@taiga-ui/experimental';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';

@Component({
  selector: 'bnk-all-active-employees',
  standalone: true,
  imports: [
    CommonModule,
    TuiCellModule,
    TuiHostedDropdownModule,
    TuiDataListWrapperModule,
    TuiButtonModule,
  ],
  templateUrl: './all-active-employees.component.html',
  styleUrl: './all-active-employees.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllActiveEmployeesComponent {
  readonly actions = [
    {
      icon: 'tuiIconPhone',
      toString: () => 'Call now',
    },
    {
      icon: 'tuiIconStar',
      toString: () => 'Add to favorites',
    },
    {
      icon: 'tuiIconTrash',
      toString: () => 'Remove item',
    },
  ];
}
