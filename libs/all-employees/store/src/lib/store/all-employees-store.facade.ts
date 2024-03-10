import { Injectable, inject } from '@angular/core';
import { EmployeeStatus, ShortEmployee } from '@bnk/employee/domain';
import { Observable, Subject, map, startWith, switchMap } from 'rxjs';
import { GetEmployeesApiService } from '../data-access/get-employees-api.service';

@Injectable()
export class AllEmployeesStoreFacade {
  private readonly getEmployeesApiService = inject(GetEmployeesApiService);

  private readonly reload$ = new Subject();

  getAllEmployees(): Observable<ReadonlyArray<ShortEmployee>> {
    return this.reload$.pipe(
      startWith(true),
      switchMap(() =>
        this.getEmployeesApiService.loadEmployees().pipe(
          map(employees =>
            employees.map(employee => ({
              id: employee.id,
              login: employee.login,
              email: employee.email,
              firstName: employee.firstName,
              lastName: employee.lastName,
              middleName: employee.middleName,
              isBlocked: employee.isBlocked,
              inactiveSince: employee.inactiveAt,
              status: employee.inactiveAt
                ? EmployeeStatus.Inactive
                : EmployeeStatus.Active,
              position: employee.position,
            })),
          ),
        ),
      ),
    );
  }

  reload() {
    this.reload$.next(true);
  }

  getActiveEmployee() {
    return this.getAllEmployees().pipe(
      map(employees =>
        employees.filter(employee => employee.status === EmployeeStatus.Active),
      ),
    );
  }

  getInactiveEmployee() {
    return this.getAllEmployees().pipe(
      map(employees =>
        employees.filter(
          employee => employee.status === EmployeeStatus.Inactive,
        ),
      ),
    );
  }
}
