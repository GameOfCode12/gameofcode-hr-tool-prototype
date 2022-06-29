import { Action } from '@ngrx/store';
import { SalaryBonus } from '../models/salaryBonus.model';

export enum SalaryBonusesActionType {
  GET_SALARY_BONUSES = 'GET_SALARY_BONUSES',
  GET_SALARY_BONUSES_SUCCESS = 'GET_SALARY_BONUSES_SUCCESS',
  GET_SALARY_BONUSES_FAILED = 'GET_SALARY_BONUSES_FAILED',
  ADD_SALARY_BONUS = 'ADD_SALARY_BONUS',
  ADD_SALARY_BONUS_SUCCESS = 'ADD_SALARY_BONUS_SUCCESS',
  ADD_SALARY_BONUS_FAILED = 'ADD_SALARY_BONUS_FAILED',
  UPDATE_SALARY_BONUS = 'UPDATE_SALARY_BONUS',
  UPDATE_SALARY_BONUS_SUCCESS = 'UPDATE_SALARY_BONUS_SUCCESS',
  UPDATE_SALARY_BONUS_FAILED = 'UPDATE_SALARY_BONUS_FAILED',
  DELETE_SALARY_BONUS = 'DELETE_SALARY_BONUS',
  DELETE_SALARY_BONUS_SUCCESS = 'DELETE_SALARY_BONUS_SUCCESS',
  DELETE_SALARY_BONUS_FAILED = 'DELETE_SALARY_BONUS_FAILED',
}

export class GetSalaryBonuses implements Action {
  readonly type = SalaryBonusesActionType.GET_SALARY_BONUSES;
}

export class GetSalaryBonusesSuccess implements Action {
  readonly type = SalaryBonusesActionType.GET_SALARY_BONUSES_SUCCESS;
  constructor(public payload: SalaryBonus[]) {}
}

export class GetSalaryBonusesFailed implements Action {
  readonly type = SalaryBonusesActionType.GET_SALARY_BONUSES_FAILED;
  constructor(public payload: string) {}
}

export class AddSalaryBonus implements Action {
  readonly type = SalaryBonusesActionType.ADD_SALARY_BONUS;
  constructor(public payload: SalaryBonus) {}
}

export class AddSalaryBonusSuccess implements Action {
  readonly type = SalaryBonusesActionType.ADD_SALARY_BONUS_SUCCESS;
  constructor(public payload: SalaryBonus) {}
}

export class AddSalaryBonusFailed implements Action {
  readonly type = SalaryBonusesActionType.ADD_SALARY_BONUS_FAILED;
  constructor(public payload: string) {}
}

export class UpdateSalaryBonus implements Action {
  readonly type = SalaryBonusesActionType.UPDATE_SALARY_BONUS;
  constructor(public payload: Partial<SalaryBonus>) {}
}

export class UpdateSalaryBonusSuccess implements Action {
  readonly type = SalaryBonusesActionType.UPDATE_SALARY_BONUS_SUCCESS;
  constructor(public payload: SalaryBonus) {}
}

export class UpdateSalaryBonusFailed implements Action {
  readonly type = SalaryBonusesActionType.UPDATE_SALARY_BONUS_FAILED;
  constructor(public payload: string) {}
}

export class DeleteSalaryBonus implements Action {
  readonly type = SalaryBonusesActionType.DELETE_SALARY_BONUS;
  constructor(public payload: SalaryBonus) {}
}

export class DeleteSalaryBonusSuccess implements Action {
  readonly type = SalaryBonusesActionType.DELETE_SALARY_BONUS_SUCCESS;
  constructor(public payload: SalaryBonus) {}
}

export class DeleteSalaryBonusFailed implements Action {
  readonly type = SalaryBonusesActionType.DELETE_SALARY_BONUS_FAILED;
  constructor(public payload: string) {}
}

export type SalaryBonusesActions =
  | GetSalaryBonuses
  | GetSalaryBonusesSuccess
  | GetSalaryBonusesFailed
  | AddSalaryBonus
  | AddSalaryBonusSuccess
  | AddSalaryBonusFailed
  | UpdateSalaryBonus
  | UpdateSalaryBonusSuccess
  | UpdateSalaryBonusFailed
  | DeleteSalaryBonus
  | DeleteSalaryBonusFailed
  | DeleteSalaryBonusSuccess;
