import { Action } from '@ngrx/store';
import { Conference } from '../models/conference.model';

export enum ConferencesActionType {
  GET_CONFERENCES = 'GET_CONFERENCES',
  GET_CONFERENCES_SUCCESS = 'GET_CONFERENCES_SUCCESS',
  GET_CONFERENCES_FAILED = 'GET_CONFERENCES_FAILED',
  ADD_CONFERENCE = 'ADD_CONFERENCE',
  ADD_CONFERENCE_SUCCESS = 'ADD_CONFERENCE_SUCCESS',
  ADD_CONFERENCE_FAILED = 'ADD_CONFERENCE_FAILED',
  UPDATE_CONFERENCE = 'UPDATE_CONFERENCE',
  UPDATE_CONFERENCE_SUCCESS = 'UPDATE_CONFERENCE_SUCCESS',
  UPDATE_CONFERENCE_FAILED = 'UPDATE_CONFERENCE_FAILED',
  DELETE_CONFERENCE = 'DELETE_CONFERENCE',
  DELETE_CONFERENCE_SUCCESS = 'DELETE_CONFERENCE_SUCCESS',
  DELETE_CONFERENCE_FAILED = 'DELETE_CONFERENCE_FAILED',
  GET_CONFERENCE = 'GET_CONFERENCE',
  GET_CONFERENCE_SUCCESS = 'GET_CONFERENCE_SUCCESS',
  GET_CONFERENCE_FAILED = 'GET_CONFERENCE_FAILED',
}

export class GetConferences implements Action {
  readonly type = ConferencesActionType.GET_CONFERENCES;
}

export class GetConferencesSuccess implements Action {
  readonly type = ConferencesActionType.GET_CONFERENCES_SUCCESS;
  constructor(public payload: Conference[]) {}
}

export class GetConferencesFailed implements Action {
  readonly type = ConferencesActionType.GET_CONFERENCES_FAILED;
  constructor(public payload: string) {}
}

export class AddConference implements Action {
  readonly type = ConferencesActionType.ADD_CONFERENCE;
  constructor(public payload: Conference) {}
}

export class AddConferenceSuccess implements Action {
  readonly type = ConferencesActionType.ADD_CONFERENCE_SUCCESS;
  constructor(public payload: Conference) {}
}

export class AddConferenceFailed implements Action {
  readonly type = ConferencesActionType.ADD_CONFERENCE_FAILED;
  constructor(public payload: string) {}
}

export class UpdateConference implements Action {
  readonly type = ConferencesActionType.UPDATE_CONFERENCE;
  constructor(public payload: Conference) {}
}

export class UpdateConferenceSuccess implements Action {
  readonly type = ConferencesActionType.UPDATE_CONFERENCE_SUCCESS;
  constructor(public payload: Conference) {}
}

export class UpdateConferenceFailed implements Action {
  readonly type = ConferencesActionType.UPDATE_CONFERENCE_FAILED;
  constructor(public payload: string) {}
}

export class DeleteConference implements Action {
  readonly type = ConferencesActionType.DELETE_CONFERENCE;
  constructor(public payload: Conference) {}
}

export class DeleteConferenceSuccess implements Action {
  readonly type = ConferencesActionType.DELETE_CONFERENCE_SUCCESS;
  constructor(public payload: Conference) {}
}

export class DeleteConferenceFailed implements Action {
  readonly type = ConferencesActionType.DELETE_CONFERENCE_FAILED;
  constructor(public payload: string) {}
}

export class GetConference implements Action {
  readonly type = ConferencesActionType.GET_CONFERENCE;
}

export class GetConferenceSuccess implements Action {
  readonly type = ConferencesActionType.GET_CONFERENCE_SUCCESS;
  constructor(public payload: Conference) {}
}

export class GetConferenceFailed implements Action {
  readonly type = ConferencesActionType.GET_CONFERENCE_FAILED;
  constructor(public payload: string) {}
}

export type ConferencesActions =
  | GetConferences
  | GetConferencesSuccess
  | GetConferencesFailed
  | AddConference
  | AddConferenceSuccess
  | AddConferenceFailed
  | UpdateConference
  | UpdateConferenceSuccess
  | UpdateConferenceFailed
  | DeleteConference
  | DeleteConferenceFailed
  | DeleteConferenceSuccess
  | GetConference
  | GetConferenceSuccess
  | GetConferenceFailed;
