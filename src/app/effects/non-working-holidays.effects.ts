import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  AddNonWorkingHolidayFailed,
  AddNonWorkingHolidaySuccess,
  DeleteNonWorkingHolidayFailed,
  DeleteNonWorkingHolidaySuccess,
  GetNonWorkingHolidaysFailed,
  GetNonWorkingHolidaysSuccess,
  NonWorkingHolidaysActionType,
  UpdateNonWorkingHolidayFailed,
  UpdateNonWorkingHolidaySuccess,
} from '../actions/non-working-holidays.actions';
import { NonWorkingHoliday } from '../models/nonWorkingHoliday.model';
import { HolidayService } from '../services/holiday/holiday.service';

@Injectable()
export class NonWorkingHolidaysEffects {
  constructor(private actions$: Actions, private holidayService: HolidayService) {}

  @Effect()
  getNonWorkingHolidays$ = this.actions$.pipe(
    ofType(NonWorkingHolidaysActionType.GET_NON_WORKING_HOLIDAYS),
    switchMap(() =>
      this.holidayService.getNonWorkingHolidays().pipe(
        map((holidays: NonWorkingHoliday[]) => new GetNonWorkingHolidaysSuccess(holidays)),
        catchError((error) => of(new GetNonWorkingHolidaysFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  addConference$ = this.actions$.pipe(
    ofType(NonWorkingHolidaysActionType.ADD_NON_WORKING_HOLIDAY),
    switchMap((action) =>
      this.holidayService.addNonWorkingHoliday(action['payload']).pipe(
        map((holiday: NonWorkingHoliday) => new AddNonWorkingHolidaySuccess(holiday)),
        catchError((error) => of(new AddNonWorkingHolidayFailed(error)))
      )
    )
  );

  @Effect()
  updateNonWorkingHoliday$ = this.actions$.pipe(
    ofType(NonWorkingHolidaysActionType.UPDATE_NON_WORKING_HOLIDAY),
    switchMap((action) =>
      this.holidayService.editNonWorkingHoliday(action['payload']).pipe(
        map((holiday: NonWorkingHoliday) => new UpdateNonWorkingHolidaySuccess(holiday)),
        catchError((error) => of(new UpdateNonWorkingHolidayFailed(error)))
      )
    )
  );

  @Effect()
  deleteNonWorkingHoliday$ = this.actions$.pipe(
    ofType(NonWorkingHolidaysActionType.DELETE_NON_WORKING_HOLIDAY),
    switchMap((action) =>
      this.holidayService.deleteNonWorkingHoliday(action['payload']).pipe(
        map((holiday: NonWorkingHoliday) => new DeleteNonWorkingHolidaySuccess(holiday)),
        catchError((error) => of(new DeleteNonWorkingHolidayFailed(error)))
      )
    )
  );
}
