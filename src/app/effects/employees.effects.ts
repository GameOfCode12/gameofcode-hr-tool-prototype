import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  AddEmployeeFailed,
  AddEmployeeSuccess,
  EmployeesActionType,
  GetEmployeesFailed,
  GetEmployeesSuccess,
  GetManagersFailed,
  GetManagersSuccess,
  GetPastEmployeesFailed,
  GetPastEmployeesSuccess,
  GetRolesFailed,
  GetRolesSuccess,
  UpdateEmployeeFailed,
  UpdateEmployeeSuccess,
} from '../actions/employees.actions';
import { switchMap, catchError, map, take } from 'rxjs/operators';
import { of } from 'rxjs';

import { EmployeeService } from '../services/employee/employee.service';
import { Employee } from '../models/employee.model';
import { RolesGroup } from '../models/role.model';

@Injectable()
export class EmployeesEffects {
  constructor(private actions$: Actions, private employeeService: EmployeeService) {}

  @Effect()
  getEmployees$ = this.actions$.pipe(
    ofType(EmployeesActionType.GET_EMPLOYEES),
    switchMap(() =>
      this.employeeService.getEmployees().pipe(
        map((employees: Employee[]) => new GetEmployeesSuccess(employees)),
        catchError((error) => of(new GetEmployeesFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  addEmployee$ = this.actions$.pipe(
    ofType(EmployeesActionType.ADD_EMPLOYEE),
    switchMap((action) =>
      this.employeeService.addEmployer(action['payload']).pipe(
        map((employee: Employee) => new AddEmployeeSuccess(employee)),
        catchError((error) => of(new AddEmployeeFailed(error)))
      )
    )
  );

  @Effect()
  updateEmployee$ = this.actions$.pipe(
    ofType(EmployeesActionType.UPDATE_EMPLOYEE),
    switchMap((action) =>
      this.employeeService.updateEmployee(action['payload']).pipe(
        map((employee: Employee) => new UpdateEmployeeSuccess(employee)),
        catchError((error) => of(new UpdateEmployeeFailed(error)))
      )
    )
  );

  @Effect()
  getManagers$ = this.actions$.pipe(
    ofType(EmployeesActionType.GET_MANAGERS),
    switchMap(() =>
      this.employeeService.getManagers().pipe(
        map((employees: Employee[]) => new GetManagersSuccess(employees)),
        catchError((error) => of(new GetManagersFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  getRoles$ = this.actions$.pipe(
    ofType(EmployeesActionType.GET_ROLES),
    switchMap(() =>
      this.employeeService.getRoles().pipe(
        map((roles: RolesGroup) => new GetRolesSuccess(roles)),
        catchError((error) => of(new GetRolesFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  getPastEmployees$ = this.actions$.pipe(
    ofType(EmployeesActionType.GET_PAST_EMPLOYEES),
    switchMap(() =>
      this.employeeService.getPastEmployees().pipe(
        map((employees: Employee[]) => new GetPastEmployeesSuccess(employees)),
        catchError((error) => of(new GetPastEmployeesFailed(error)))
      )
    ),
    take(1)
  );
}
