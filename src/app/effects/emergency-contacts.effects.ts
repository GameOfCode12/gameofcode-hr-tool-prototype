import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  EmergencyContactsActionType,
  GetEmergencyContactsFailed,
  GetEmergencyContactsSuccess,
} from '../actions/emergency-contacts.actions';
import { EmergencyContact } from '../models/emergencyContact.model';
import { EmployeeService } from '../services/employee/employee.service';

@Injectable()
export class EmergencyContactsEffects {
  constructor(private actions$: Actions, private emergencyContactsService: EmployeeService) {}

  @Effect()
  getEmergencyContacts$ = this.actions$.pipe(
    ofType(EmergencyContactsActionType.GET_EMERGENCY_CONTACTS),
    switchMap(() =>
      this.emergencyContactsService.getEmergencyContacts().pipe(
        map((emergencyContacts: EmergencyContact[]) => new GetEmergencyContactsSuccess(emergencyContacts)),
        catchError((error) => of(new GetEmergencyContactsFailed(error)))
      )
    ),
    take(1)
  );
}
