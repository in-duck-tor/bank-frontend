import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bnk-all-inactive-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-inactive-employees.component.html',
  styleUrl: './all-inactive-employees.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllInactiveEmployeesComponent {}
