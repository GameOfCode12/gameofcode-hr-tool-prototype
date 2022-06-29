import { ConferencesActionType, ConferencesActions } from '../actions/conferences.actions';
import * as _ from 'lodash';
import { EmployeesState } from '../states/employees.state';

export function conferencesReducer(state: EmployeesState, action: ConferencesActions) {
  switch (action.type) {
    case ConferencesActionType.GET_CONFERENCES: {
      return { ...state };
    }

    case ConferencesActionType.GET_CONFERENCES_SUCCESS: {
      return {
        ...state,
        conferences: action.payload,
      };
    }

    case ConferencesActionType.GET_CONFERENCES_FAILED: {
      return { ...state };
    }

    case ConferencesActionType.ADD_CONFERENCE: {
      return {
        ...state,
      };
    }

    case ConferencesActionType.ADD_CONFERENCE_FAILED: {
      return { ...state };
    }

    case ConferencesActionType.ADD_CONFERENCE_SUCCESS: {
      // state elements/properties are immutable
      // copy needs to be made
      const conferences = undefined !== state['conferences'] ? _.cloneDeep(state['conferences']) : [];
      conferences.push(action.payload);
      return {
        ...state,
        conferences: conferences,
      };
    }

    case ConferencesActionType.UPDATE_CONFERENCE: {
      return {
        ...state,
      };
    }

    case ConferencesActionType.UPDATE_CONFERENCE_SUCCESS: {
      let newState = state['conferences'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((conference) => conference.id === action.payload.id);
      newState[index] = action.payload;
      return {
        ...state,
        conferences: newState,
      };
    }

    case ConferencesActionType.UPDATE_CONFERENCE_FAILED: {
      return { ...state };
    }

    case ConferencesActionType.DELETE_CONFERENCE: {
      return {
        ...state,
      };
    }

    case ConferencesActionType.DELETE_CONFERENCE_SUCCESS: {
      let newState = state['conferences'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return {
        ...state,
        conferences: newState,
      };
    }

    case ConferencesActionType.GET_CONFERENCE: {
      return { ...state };
    }

    case ConferencesActionType.GET_CONFERENCE_SUCCESS: {
      return {
        ...state,
      };
    }

    case ConferencesActionType.GET_CONFERENCE_FAILED: {
      return { ...state };
    }
    default:
      return state;
  }
}
