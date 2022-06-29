import { SalariesActionType, SalariesActions } from '../actions/salaries.actions';
import * as _ from 'lodash';
import { EmployeesState } from '../states/employees.state';

export function salariesReducer(state: EmployeesState, action: SalariesActions) {
  switch (action.type) {
    case SalariesActionType.GET_SALARIES: {
      return { ...state };
    }

    case SalariesActionType.GET_SALARIES_SUCCESS: {
      return {
        ...state,
        salaries: action.payload,
      };
    }

    case SalariesActionType.GET_SALARIES_FAILED: {
      return { ...state };
    }

    case SalariesActionType.ADD_SALARY: {
      return {
        ...state,
      };
    }

    case SalariesActionType.ADD_SALARY_FAILED: {
      return { ...state };
    }

    case SalariesActionType.ADD_SALARY_SUCCESS: {
      // state elements/properties are immutable
      // copy needs to be made
      const salaries = undefined !== state['salaries'] ? _.cloneDeep(state['salaries']) : [];
      salaries.push(action.payload);
      return {
        ...state,
        salaries: salaries,
      };
    }

    case SalariesActionType.UPDATE_SALARY: {
      return {
        ...state,
      };
    }

    case SalariesActionType.UPDATE_SALARY_SUCCESS: {
      let newState = state['salaries'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((salary) => salary.id === action.payload.id);
      newState[index] = action.payload;
      return {
        ...state,
        salaries: newState,
      };
    }

    case SalariesActionType.UPDATE_SALARY_FAILED: {
      return { ...state };
    }

    case SalariesActionType.DELETE_SALARY: {
      return {
        ...state,
      };
    }

    case SalariesActionType.DELETE_SALARY_SUCCESS: {
      let newState = state['salaries'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return {
        ...state,
        salaries: newState,
      };
    }

    default:
      return state;
  }
}
