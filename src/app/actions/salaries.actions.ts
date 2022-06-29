import { Action } from '@ngrx/store';
import { Salary } from '../models/salary.model';

export enum SalariesActionType {
  GET_SALARIES = 'GET_SALARIES',
  GET_SALARIES_SUCCESS = 'GET_SALARIES_SUCCESS',
  GET_SALARIES_FAILED = 'GET_SALARIES_FAILED',
  ADD_SALARY = 'ADD_SALARY',
  ADD_SALARY_SUCCESS = 'ADD_SALARY_SUCCESS',
  ADD_SALARY_FAILED = 'ADD_SALARY_FAILED',
  UPDATE_SALARY = 'UPDATE_SALARY',
  UPDATE_SALARY_SUCCESS = 'UPDATE_SALARY_SUCCESS',
  UPDATE_SALARY_FAILED = 'UPDATE_SALARY_FAILED',
  DELETE_SALARY = 'DELETE_SALARY',
  DELETE_SALARY_SUCCESS = 'DELETE_SALARY_SUCCESS',
  DELETE_SALARY_FAILED = 'DELETE_SALARY_FAILED',
}

export class GetSalaries implements Action {
  readonly type = SalariesActionType.GET_SALARIES;
}

export class GetSalariesSuccess implements Action {
  readonly type = SalariesActionType.GET_SALARIES_SUCCESS;
  constructor(public payload: Salary[]) {}
}

export class GetSalariesFailed implements Action {
  readonly type = SalariesActionType.GET_SALARIES_FAILED;
  constructor(public payload: string) {}
}

export class AddSalary implements Action {
  readonly type = SalariesActionType.ADD_SALARY;
  constructor(public payload: Salary) {}
}

export class AddSalarySuccess implements Action {
  readonly type = SalariesActionType.ADD_SALARY_SUCCESS;
  constructor(public payload: Salary) {}
}

export class AddSalaryFailed implements Action {
  readonly type = SalariesActionType.ADD_SALARY_FAILED;
  constructor(public payload: string) {}
}

export class UpdateSalary implements Action {
  readonly type = SalariesActionType.UPDATE_SALARY;
  constructor(public payload: Salary) {}
}

export class UpdateSalarySuccess implements Action {
  readonly type = SalariesActionType.UPDATE_SALARY_SUCCESS;
  constructor(public payload: Salary) {}
}

export class UpdateSalaryFailed implements Action {
  readonly type = SalariesActionType.UPDATE_SALARY_FAILED;
  constructor(public payload: string) {}
}

export class DeleteSalary implements Action {
  readonly type = SalariesActionType.DELETE_SALARY;
  constructor(public payload: Salary) {}
}

export class DeleteSalarySuccess implements Action {
  readonly type = SalariesActionType.DELETE_SALARY_SUCCESS;
  constructor(public payload: Salary) {}
}

export class DeleteSalaryFailed implements Action {
  readonly type = SalariesActionType.DELETE_SALARY_FAILED;
  constructor(public payload: string) {}
}

export type SalariesActions =
  | GetSalaries
  | GetSalariesSuccess
  | GetSalariesFailed
  | AddSalary
  | AddSalarySuccess
  | AddSalaryFailed
  | UpdateSalary
  | UpdateSalarySuccess
  | UpdateSalaryFailed
  | DeleteSalary
  | DeleteSalaryFailed
  | DeleteSalarySuccess;
