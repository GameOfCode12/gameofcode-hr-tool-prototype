import * as _ from 'lodash';
import { EmployeesState } from '../states/employees.state';
import { NonWorkingHolidaysActions, NonWorkingHolidaysActionType } from '../actions/non-working-holidays.actions';

export function holidaysReducer(state: EmployeesState, action: NonWorkingHolidaysActions) {
  switch (action.type) {
    case NonWorkingHolidaysActionType.GET_NON_WORKING_HOLIDAYS: {
      return { ...state };
    }

    case NonWorkingHolidaysActionType.GET_NON_WORKING_HOLIDAYS_SUCCESS: {
      return {
        ...state,
        nonWorkingHolidays: action.payload,
      };
    }

    case NonWorkingHolidaysActionType.GET_NON_WORKING_HOLIDAYS_FAILED: {
      return { ...state };
    }

    case NonWorkingHolidaysActionType.ADD_NON_WORKING_HOLIDAY: {
      return {
        ...state,
      };
    }

    case NonWorkingHolidaysActionType.ADD_NON_WORKING_HOLIDAY_FAILED: {
      return { ...state };
    }

    case NonWorkingHolidaysActionType.ADD_NON_WORKING_HOLIDAY_SUCCESS: {
      // state elements/properties are immutable
      // copy needs to be made
      const holidays = undefined !== state['nonWorkingHolidays'] ? _.cloneDeep(state['nonWorkingHolidays']) : [];
      holidays.push(action.payload);
      return {
        ...state,
        nonWorkingHolidays: holidays,
      };
    }

    case NonWorkingHolidaysActionType.UPDATE_NON_WORKING_HOLIDAY: {
      return {
        ...state,
      };
    }

    case NonWorkingHolidaysActionType.UPDATE_NON_WORKING_HOLIDAY_SUCCESS: {
      let newState = undefined !== state['nonWorkingHolidays'] ? _.cloneDeep(state['nonWorkingHolidays']) : [];
      const index = newState.findIndex((holiday) => holiday.id === action.payload.id);
      newState[index] = action.payload;
      return {
        ...state,
        nonWorkingHolidays: newState,
      };
    }

    case NonWorkingHolidaysActionType.UPDATE_NON_WORKING_HOLIDAY_FAILED: {
      return { ...state };
    }

    case NonWorkingHolidaysActionType.DELETE_NON_WORKING_HOLIDAY: {
      return {
        ...state,
      };
    }

    case NonWorkingHolidaysActionType.DELETE_NON_WORKING_HOLIDAY_SUCCESS: {
      let newState = undefined !== state['nonWorkingHolidays'] ? _.cloneDeep(state['nonWorkingHolidays']) : [];
      const index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return {
        ...state,
        nonWorkingHolidays: newState,
      };
    }

    default:
      return state;
  }
}
