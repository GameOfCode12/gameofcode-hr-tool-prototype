import { Action } from '@ngrx/store';
import { EmergencyContact } from '../models/emergencyContact.model';
import { Project } from '../models/project.model';

export enum EmergencyContactsActionType {
  GET_EMERGENCY_CONTACTS = 'GET_EMERGENCY_CONTACTS',
  GET_EMERGENCY_CONTACTS_SUCCESS = 'GET_EMERGENCY_CONTACTS_SUCCESS',
  GET_EMERGENCY_CONTACTS_FAILED = 'GET_EMERGENCY_CONTACTS_FAILED',
}

export class GetEmergencyContacts implements Action {
  readonly type = EmergencyContactsActionType.GET_EMERGENCY_CONTACTS;
}

export class GetEmergencyContactsSuccess implements Action {
  readonly type = EmergencyContactsActionType.GET_EMERGENCY_CONTACTS_SUCCESS;
  constructor(public payload: EmergencyContact[]) {}
}

export class GetEmergencyContactsFailed implements Action {
  readonly type = EmergencyContactsActionType.GET_EMERGENCY_CONTACTS_FAILED;
  constructor(public payload: string) {}
}

export type EmergencyContactsActions = GetEmergencyContacts | GetEmergencyContactsSuccess | GetEmergencyContactsFailed;
