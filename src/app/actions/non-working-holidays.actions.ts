import { Action } from '@ngrx/store';
import { NonWorkingHoliday } from '../models/nonWorkingHoliday.model';

export enum NonWorkingHolidaysActionType {
  GET_NON_WORKING_HOLIDAYS = 'GET_NON_WORKING_HOLIDAYS',
  GET_NON_WORKING_HOLIDAYS_SUCCESS = 'GET_NON_WORKING_HOLIDAYS_SUCCESS',
  GET_NON_WORKING_HOLIDAYS_FAILED = 'GET_NON_WORKING_HOLIDAYS_FAILED',
  ADD_NON_WORKING_HOLIDAY = 'ADD_NON_WORKING_HOLIDAY',
  ADD_NON_WORKING_HOLIDAY_SUCCESS = 'ADD_NON_WORKING_HOLIDAY_SUCCESS',
  ADD_NON_WORKING_HOLIDAY_FAILED = 'ADD_NON_WORKING_HOLIDAY_FAILED',
  UPDATE_NON_WORKING_HOLIDAY = 'UPDATE_NON_WORKING_HOLIDAY',
  UPDATE_NON_WORKING_HOLIDAY_SUCCESS = 'UPDATE_NON_WORKING_HOLIDAY_SUCCESS',
  UPDATE_NON_WORKING_HOLIDAY_FAILED = 'UPDATE_NON_WORKING_HOLIDAY_FAILED',
  DELETE_NON_WORKING_HOLIDAY = 'DELETE_NON_WORKING_HOLIDAY',
  DELETE_NON_WORKING_HOLIDAY_SUCCESS = 'DELETE_NON_WORKING_HOLIDAY_SUCCESS',
  DELETE_NON_WORKING_HOLIDAY_FAILED = 'DELETE_NON_WORKING_HOLIDAY_FAILED',
}

export class GetNonWorkingHolidays implements Action {
  readonly type = NonWorkingHolidaysActionType.GET_NON_WORKING_HOLIDAYS;
}

export class GetNonWorkingHolidaysSuccess implements Action {
  readonly type = NonWorkingHolidaysActionType.GET_NON_WORKING_HOLIDAYS_SUCCESS;
  constructor(public payload: NonWorkingHoliday[]) {}
}

export class GetNonWorkingHolidaysFailed implements Action {
  readonly type = NonWorkingHolidaysActionType.GET_NON_WORKING_HOLIDAYS_FAILED;
  constructor(public payload: string) {}
}

export class AddNonWorkingHoliday implements Action {
  readonly type = NonWorkingHolidaysActionType.ADD_NON_WORKING_HOLIDAY;
  constructor(public payload: NonWorkingHoliday) {}
}

export class AddNonWorkingHolidaySuccess implements Action {
  readonly type = NonWorkingHolidaysActionType.ADD_NON_WORKING_HOLIDAY_SUCCESS;
  constructor(public payload: NonWorkingHoliday) {}
}

export class AddNonWorkingHolidayFailed implements Action {
  readonly type = NonWorkingHolidaysActionType.ADD_NON_WORKING_HOLIDAY_FAILED;
  constructor(public payload: string) {}
}

export class UpdateNonWorkingHoliday implements Action {
  readonly type = NonWorkingHolidaysActionType.UPDATE_NON_WORKING_HOLIDAY;
  constructor(public payload: NonWorkingHoliday) {}
}

export class UpdateNonWorkingHolidaySuccess implements Action {
  readonly type = NonWorkingHolidaysActionType.UPDATE_NON_WORKING_HOLIDAY_SUCCESS;
  constructor(public payload: NonWorkingHoliday) {}
}

export class UpdateNonWorkingHolidayFailed implements Action {
  readonly type = NonWorkingHolidaysActionType.UPDATE_NON_WORKING_HOLIDAY_FAILED;
  constructor(public payload: string) {}
}

export class DeleteNonWorkingHoliday implements Action {
  readonly type = NonWorkingHolidaysActionType.DELETE_NON_WORKING_HOLIDAY;
  constructor(public payload: NonWorkingHoliday) {}
}

export class DeleteNonWorkingHolidaySuccess implements Action {
  readonly type = NonWorkingHolidaysActionType.DELETE_NON_WORKING_HOLIDAY_SUCCESS;
  constructor(public payload: NonWorkingHoliday) {}
}

export class DeleteNonWorkingHolidayFailed implements Action {
  readonly type = NonWorkingHolidaysActionType.DELETE_NON_WORKING_HOLIDAY_FAILED;
  constructor(public payload: string) {}
}

export type NonWorkingHolidaysActions =
  | GetNonWorkingHolidays
  | GetNonWorkingHolidaysSuccess
  | GetNonWorkingHolidaysFailed
  | AddNonWorkingHoliday
  | AddNonWorkingHolidaySuccess
  | AddNonWorkingHolidayFailed
  | UpdateNonWorkingHoliday
  | UpdateNonWorkingHolidaySuccess
  | UpdateNonWorkingHolidayFailed
  | DeleteNonWorkingHoliday
  | DeleteNonWorkingHolidayFailed
  | DeleteNonWorkingHolidaySuccess;
