import { EmergencyContactsActionType, EmergencyContactsActions } from '../actions/emergency-contacts.actions';
import { EmployeesState } from '../states/employees.state';

export function emergencyContactsReducer(state: EmployeesState, action: EmergencyContactsActions) {
  switch (action.type) {
    case EmergencyContactsActionType.GET_EMERGENCY_CONTACTS: {
      return { ...state };
    }

    case EmergencyContactsActionType.GET_EMERGENCY_CONTACTS_SUCCESS: {
      return {
        ...state,
        emergencyContacts: action.payload,
      };
    }

    case EmergencyContactsActionType.GET_EMERGENCY_CONTACTS_FAILED: {
      return { ...state };
    }

    default:
      return state;
  }
}
