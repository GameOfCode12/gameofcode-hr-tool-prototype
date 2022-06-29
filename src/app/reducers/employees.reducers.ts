import { EmployeesActions, EmployeesActionType } from '../actions/employees.actions';
import { EmployeesState } from '../states/employees.state';
import * as _ from 'lodash';
import { Project } from '../models/project.model';

export const initialState = {};

export function employeesReducer(state: EmployeesState, action: EmployeesActions) {
  switch (action.type) {
    /****************** EMPLOYEE ACTIONS ******************/
    case EmployeesActionType.GET_EMPLOYEES: {
      return { ...state };
    }

    case EmployeesActionType.GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
      };
    }

    case EmployeesActionType.GET_EMPLOYEES_FAILED: {
      return { ...state };
    }

    case EmployeesActionType.ADD_EMPLOYEE: {
      return { ...state };
    }

    case EmployeesActionType.ADD_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employees: [...state['employees'], action.payload],
      };
    }

    case EmployeesActionType.ADD_EMPLOYEE_FAILED: {
      return { ...state };
    }

    case EmployeesActionType.UPDATE_EMPLOYEE: {
      return { ...state };
    }

    case EmployeesActionType.UPDATE_EMPLOYEE_SUCCESS: {
      // state elements/properties are immutable
      // copy needs to be made
      let newState = _.cloneDeep(state['employees']);
      const index = newState.findIndex((employee) => employee.id === action.payload.id);
      newState[index] = action.payload;

      return {
        ...state,
        employees: newState,
      };
    }

    case EmployeesActionType.UPDATE_EMPLOYEE_FAILED: {
      return { ...state };
    }

    case EmployeesActionType.GET_MANAGERS: {
      return { ...state };
    }

    case EmployeesActionType.GET_MANAGERS_SUCCESS: {
      return {
        ...state,
        managers: action.payload,
      };
    }

    case EmployeesActionType.GET_MANAGERS_FAILED: {
      return { ...state };
    }

    case EmployeesActionType.GET_ROLES: {
      return { ...state };
    }

    case EmployeesActionType.GET_ROLES_SUCCESS: {
      return {
        ...state,
        roles: action.payload,
      };
    }

    case EmployeesActionType.GET_ROLES_FAILED: {
      return { ...state };
    }

    case EmployeesActionType.GET_PAST_EMPLOYEES: {
      return { ...state };
    }

    case EmployeesActionType.GET_PAST_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        pastEmployees: action.payload,
      };
    }

    case EmployeesActionType.GET_PAST_EMPLOYEES_FAILED: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
}
