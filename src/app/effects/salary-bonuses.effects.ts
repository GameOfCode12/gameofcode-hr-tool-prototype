import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  AddSalaryBonusFailed,
  AddSalaryBonusSuccess,
  DeleteSalaryBonusFailed,
  DeleteSalaryBonusSuccess,
  GetSalaryBonusesFailed,
  GetSalaryBonusesSuccess,
  SalaryBonusesActionType,
  UpdateSalaryBonusFailed,
  UpdateSalaryBonusSuccess,
} from '../actions/salary-bonuses.actions';
import { SalaryBonus } from '../models/salaryBonus.model';

import { SalaryBonusService } from '../services/salary-bonus/salary-bonus.service';

@Injectable()
export class SalaryBonusesEffects {
  constructor(private actions$: Actions, private salaryBonusService: SalaryBonusService) {}

  @Effect()
  // sort salaries in ascending order when fetching them
  getSalaryBonuses$ = this.actions$.pipe(
    ofType(SalaryBonusesActionType.GET_SALARY_BONUSES),
    switchMap(() =>
      this.salaryBonusService.getSalaryBonuses().pipe(
        map((salaries: SalaryBonus[]) => new GetSalaryBonusesSuccess(salaries.sort((a, b) => a.id - b.id))),
        catchError((error) => of(new GetSalaryBonusesFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  addSalaryBonus$ = this.actions$.pipe(
    ofType(SalaryBonusesActionType.ADD_SALARY_BONUS),
    switchMap((action) =>
      this.salaryBonusService.createSalaryBonus(action['payload']).pipe(
        map((salaryBonus: SalaryBonus) => new AddSalaryBonusSuccess(salaryBonus)),
        catchError((error) => of(new AddSalaryBonusFailed(error)))
      )
    )
  );

  @Effect()
  updateSalaryBonus$ = this.actions$.pipe(
    ofType(SalaryBonusesActionType.UPDATE_SALARY_BONUS),
    switchMap((action) =>
      this.salaryBonusService.updateSalaryBonus(action['payload']).pipe(
        map((salaryBonus: SalaryBonus) => new UpdateSalaryBonusSuccess(salaryBonus)),
        catchError((error) => of(new UpdateSalaryBonusFailed(error)))
      )
    )
  );

  @Effect()
  deleteSalaryBonus$ = this.actions$.pipe(
    ofType(SalaryBonusesActionType.DELETE_SALARY_BONUS),
    switchMap((action) =>
      this.salaryBonusService.deleteSalaryBonus(action['payload']).pipe(
        map((salaryBonus: SalaryBonus) => new DeleteSalaryBonusSuccess(salaryBonus)),
        catchError((error) => of(new DeleteSalaryBonusFailed(error)))
      )
    )
  );
}
