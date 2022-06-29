import { SalaryBonusesActionType, SalaryBonusesActions } from '../actions/salary-bonuses.actions';
import * as _ from 'lodash';
import { EmployeesState } from '../states/employees.state';

export function salaryBonusesReducer(state: EmployeesState, action: SalaryBonusesActions) {
  switch (action.type) {
    case SalaryBonusesActionType.GET_SALARY_BONUSES: {
      return { ...state };
    }

    case SalaryBonusesActionType.GET_SALARY_BONUSES_SUCCESS: {
      return {
        ...state,
        salaryBonuses: action.payload,
      };
    }

    case SalaryBonusesActionType.GET_SALARY_BONUSES_FAILED: {
      return { ...state };
    }

    case SalaryBonusesActionType.ADD_SALARY_BONUS: {
      return {
        ...state,
      };
    }

    case SalaryBonusesActionType.ADD_SALARY_BONUS_FAILED: {
      return { ...state };
    }

    case SalaryBonusesActionType.ADD_SALARY_BONUS_SUCCESS: {
      // state elements/properties are immutable
      // copy needs to be made
      const salaryBonuses = undefined !== state['salaryBonuses'] ? _.cloneDeep(state['salaryBonuses']) : [];
      salaryBonuses.push(action.payload);
      return {
        ...state,
        salaryBonuses: salaryBonuses,
      };
    }

    case SalaryBonusesActionType.UPDATE_SALARY_BONUS: {
      return {
        ...state,
      };
    }

    case SalaryBonusesActionType.UPDATE_SALARY_BONUS_SUCCESS: {
      let newState = state['salaryBonuses'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((salaryBonus) => salaryBonus.id === action.payload.id);
      newState[index] = action.payload;
      return {
        ...state,
        salaryBonuses: newState,
      };
    }

    case SalaryBonusesActionType.UPDATE_SALARY_BONUS_FAILED: {
      return { ...state };
    }

    case SalaryBonusesActionType.DELETE_SALARY_BONUS: {
      return {
        ...state,
      };
    }

    case SalaryBonusesActionType.DELETE_SALARY_BONUS_SUCCESS: {
      let newState = state['salaryBonuses'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return {
        ...state,
        salaryBonuses: newState,
      };
    }

    default:
      return state;
  }
}
