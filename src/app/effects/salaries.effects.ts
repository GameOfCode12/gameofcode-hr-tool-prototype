import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  AddSalaryFailed,
  AddSalarySuccess,
  SalariesActionType,
  DeleteSalaryFailed,
  DeleteSalarySuccess,
  GetSalariesFailed,
  GetSalariesSuccess,
  UpdateSalaryFailed,
  UpdateSalarySuccess,
} from '../actions/salaries.actions';
import { Salary } from '../models/salary.model';
import { SalaryService } from '../services/salary/salary.service';

@Injectable()
export class SalariesEffects {
  constructor(private actions$: Actions, private salaryService: SalaryService) {}

  @Effect()
  // sort salaries in ascending order when fetching them
  getSalaries$ = this.actions$.pipe(
    ofType(SalariesActionType.GET_SALARIES),
    switchMap(() =>
      this.salaryService.getSalaries().pipe(
        map((salaries: Salary[]) => new GetSalariesSuccess(salaries.sort((a, b) => a.id - b.id))),
        catchError((error) => of(new GetSalariesFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  addSalary$ = this.actions$.pipe(
    ofType(SalariesActionType.ADD_SALARY),
    switchMap((action) =>
      this.salaryService.createSalary(action['payload']).pipe(
        map((salary: Salary) => new AddSalarySuccess(salary)),
        catchError((error) => of(new AddSalaryFailed(error)))
      )
    )
  );

  @Effect()
  updateSalary$ = this.actions$.pipe(
    ofType(SalariesActionType.UPDATE_SALARY),
    switchMap((action) =>
      this.salaryService.updateSalary(action['payload']).pipe(
        map((salary: Salary) => new UpdateSalarySuccess(salary)),
        catchError((error) => of(new UpdateSalaryFailed(error)))
      )
    )
  );

  @Effect()
  deleteSalary$ = this.actions$.pipe(
    ofType(SalariesActionType.DELETE_SALARY),
    switchMap((action) =>
      this.salaryService.deleteSalary(action['payload']).pipe(
        map((salary: Salary) => new DeleteSalarySuccess(salary)),
        catchError((error) => of(new DeleteSalaryFailed(error)))
      )
    )
  );
}
