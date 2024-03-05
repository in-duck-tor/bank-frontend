import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActionsFeedComponent, IAction } from '@bnk/shared/ui-cards';

@Component({
  selector: 'bnk-all-active-employees',
  standalone: true,
  imports: [CommonModule, ActionsFeedComponent],
  templateUrl: './all-active-employees.component.html',
  styleUrl: './all-active-employees.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllActiveEmployeesComponent {
  readonly actions: IAction[] = [
    {
      icon: 'tuiIconPhone',
      name: 'Заблокировать',
      onClick: () => console.log(1),
    },
    {
      icon: 'tuiIconPhone',
      name: '2',
      onClick: () => console.log(2),
    },
  ];
}
