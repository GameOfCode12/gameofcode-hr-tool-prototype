import { Action } from '@ngrx/store';
import { Employee } from '../models/employee.model';
import { RolesGroup } from '../models/role.model';

export enum EmployeesActionType {
  GET_EMPLOYEES = 'GET_EMPLOYEES',
  GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS',
  GET_EMPLOYEES_FAILED = 'GET_EMPLOYEES_FAILED',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS',
  ADD_EMPLOYEE_FAILED = 'ADD_EMPLOYEE_FAILED',
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
  UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS',
  UPDATE_EMPLOYEE_FAILED = 'UPDATE_EMPLOYEE_FAILED',
  GET_MANAGERS = 'GET_MANAGERS',
  GET_MANAGERS_SUCCESS = 'GET_MANAGERS_SUCCESS',
  GET_MANAGERS_FAILED = 'GET_MANAGERS_FAILED',
  GET_ROLES = 'GET_ROLES',
  GET_ROLES_SUCCESS = 'GET_ROLES_SUCCESS',
  GET_ROLES_FAILED = 'GET_ROLES_FAILED',
  GET_EMPLOYEE_BY_ID = 'GET_EMPLOYEE_BY_ID',
  GET_EMPLOYEE_BY_ID_SUCCESS = 'GET_EMPLOYEE_BY_ID_SUCCESS',
  GET_EMPLOYEE_BY_ID_FAILED = 'GET_EMPLOYEE_BY_ID_FAILED',
  GET_PAST_EMPLOYEES = 'GET_PAST_EMPLOYEES',
  GET_PAST_EMPLOYEES_SUCCESS = 'GET_PAST_EMPLOYEES_SUCCESS',
  GET_PAST_EMPLOYEES_FAILED = 'GET_PAST_EMPLOYEES_FAILED',
}

export class GetEmployees implements Action {
  readonly type = EmployeesActionType.GET_EMPLOYEES;
}

export class GetEmployeesSuccess implements Action {
  readonly type = EmployeesActionType.GET_EMPLOYEES_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class GetEmployeesFailed implements Action {
  readonly type = EmployeesActionType.GET_EMPLOYEES_FAILED;
  constructor(public payload: string) {}
}

export class AddEmployee implements Action {
  readonly type = EmployeesActionType.ADD_EMPLOYEE;
  constructor(public payload: Employee) {}
}
export class AddEmployeeSuccess implements Action {
  readonly type = EmployeesActionType.ADD_EMPLOYEE_SUCCESS;
  constructor(public payload: Employee) {}
}
export class AddEmployeeFailed implements Action {
  readonly type = EmployeesActionType.ADD_EMPLOYEE_FAILED;
  constructor(public payload: string) {}
}

export class UpdateEmployee implements Action {
  readonly type = EmployeesActionType.UPDATE_EMPLOYEE;
  constructor(public payload: Employee) {}
}
export class UpdateEmployeeSuccess implements Action {
  readonly type = EmployeesActionType.UPDATE_EMPLOYEE_SUCCESS;
  constructor(public payload: Employee) {}
}
export class UpdateEmployeeFailed implements Action {
  readonly type = EmployeesActionType.UPDATE_EMPLOYEE_FAILED;
  constructor(public payload: string) {}
}

export class GetManagers implements Action {
  readonly type = EmployeesActionType.GET_MANAGERS;
}

export class GetManagersSuccess implements Action {
  readonly type = EmployeesActionType.GET_MANAGERS_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class GetManagersFailed implements Action {
  readonly type = EmployeesActionType.GET_MANAGERS_FAILED;
  constructor(public payload: string) {}
}

export class GetRoles implements Action {
  readonly type = EmployeesActionType.GET_ROLES;
}

export class GetRolesSuccess implements Action {
  readonly type = EmployeesActionType.GET_ROLES_SUCCESS;
  constructor(public payload: RolesGroup) {}
}

export class GetRolesFailed implements Action {
  readonly type = EmployeesActionType.GET_ROLES_FAILED;
  constructor(public payload: string) {}
}

export class GetPastEmployees implements Action {
  readonly type = EmployeesActionType.GET_PAST_EMPLOYEES;
}

export class GetPastEmployeesSuccess implements Action {
  readonly type = EmployeesActionType.GET_PAST_EMPLOYEES_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class GetPastEmployeesFailed implements Action {
  readonly type = EmployeesActionType.GET_PAST_EMPLOYEES_FAILED;
  constructor(public payload: string) {}
}

export type EmployeesActions =
  | GetEmployees
  | GetEmployeesSuccess
  | GetEmployeesFailed
  | AddEmployee
  | AddEmployeeSuccess
  | AddEmployeeFailed
  | GetManagers
  | GetManagersSuccess
  | GetManagersFailed
  | GetRoles
  | GetRolesSuccess
  | GetRolesFailed
  | UpdateEmployee
  | UpdateEmployeeSuccess
  | UpdateEmployeeFailed
  | GetPastEmployees
  | GetPastEmployeesFailed
  | GetPastEmployeesSuccess;
