import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  AddConferenceFailed,
  AddConferenceSuccess,
  ConferencesActionType,
  DeleteConferenceFailed,
  DeleteConferenceSuccess,
  GetConferenceFailed,
  GetConferencesFailed,
  GetConferencesSuccess,
  GetConferenceSuccess,
  UpdateConferenceFailed,
  UpdateConferenceSuccess,
} from '../actions/conferences.actions';
import { Conference } from '../models/conference.model';
import { ConferenceService } from '../services/conference/conference.service';

@Injectable()
export class ConferencesEffects {
  constructor(private actions$: Actions, private conferenceService: ConferenceService) {}

  @Effect()
  // sort conferences in ascending order when fetching them
  getConferences$ = this.actions$.pipe(
    ofType(ConferencesActionType.GET_CONFERENCES),
    switchMap(() =>
      this.conferenceService.getConferences().pipe(
        map((conferences: Conference[]) => new GetConferencesSuccess(conferences.sort((a, b) => a.id - b.id))),
        catchError((error) => of(new GetConferencesFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  getConference$ = this.actions$.pipe(
    ofType(ConferencesActionType.GET_CONFERENCE),
    switchMap((action) =>
      this.conferenceService.getConference(action['payload']).pipe(
        map((conference: Conference) => new GetConferenceSuccess(conference)),
        catchError((error) => of(new GetConferenceFailed(error)))
      )
    ),
    take(1)
  );

  @Effect()
  addConference$ = this.actions$.pipe(
    ofType(ConferencesActionType.ADD_CONFERENCE),
    switchMap((action) =>
      this.conferenceService.createConference(action['payload']).pipe(
        map((conference: Conference) => new AddConferenceSuccess(conference)),
        catchError((error) => of(new AddConferenceFailed(error)))
      )
    )
  );

  @Effect()
  updateConference$ = this.actions$.pipe(
    ofType(ConferencesActionType.UPDATE_CONFERENCE),
    switchMap((action) =>
      this.conferenceService.updateConference(action['payload']).pipe(
        map((conference: Conference) => new UpdateConferenceSuccess(conference)),
        catchError((error) => of(new UpdateConferenceFailed(error)))
      )
    )
  );

  @Effect()
  deleteConference$ = this.actions$.pipe(
    ofType(ConferencesActionType.DELETE_CONFERENCE),
    switchMap((action) =>
      this.conferenceService.deleteConference(action['payload']).pipe(
        map((conference: Conference) => new DeleteConferenceSuccess(conference)),
        catchError((error) => of(new DeleteConferenceFailed(error)))
      )
    )
  );
}
