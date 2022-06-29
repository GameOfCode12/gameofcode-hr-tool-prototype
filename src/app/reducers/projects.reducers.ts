import { ProjectsActionType, ProjectsActions } from '../actions/projects.actions';
import * as _ from 'lodash';
import { EmployeesState } from '../states/employees.state';

export function projectsReducer(state: EmployeesState, action: ProjectsActions) {
  switch (action.type) {
    case ProjectsActionType.GET_PROJECTS: {
      return { ...state };
    }

    case ProjectsActionType.GET_PROJECTS_SUCCESS: {
      // if some employee(s) on project(s) have been moved to past employees
      // remove them from the employee's list on project as well
      let projects = JSON.parse(JSON.stringify(action.payload));
      projects.forEach((project) => {
        project.employees.forEach((employee) => {
          if (employee.dateLeft) {
            let index = project.employees.indexOf(employee);
            project.employees.splice(index, 1);
          }
        });
      });
      return {
        ...state,
        projects: projects,
      };
    }

    case ProjectsActionType.GET_PROJECTS_FAILED: {
      return { ...state };
    }

    case ProjectsActionType.ADD_PROJECT: {
      return {
        ...state,
      };
    }

    case ProjectsActionType.ADD_PROJECT_FAILED: {
      return { ...state };
    }

    case ProjectsActionType.ADD_PROJECT_SUCCESS: {
      // state elements/properties are immutable
      // copy needs to be made
      const projects = undefined !== state['projects'] ? _.cloneDeep(state['projects']) : [];
      projects.push(action.payload);
      return {
        ...state,
        projects: projects,
      };
    }

    case ProjectsActionType.UPDATE_PROJECT: {
      return {
        ...state,
      };
    }

    case ProjectsActionType.UPDATE_PROJECT_SUCCESS: {
      let newState = state['projects'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((project) => project.id === action.payload.id);
      newState[index] = action.payload;
      return {
        ...state,
        projects: newState,
      };
    }

    case ProjectsActionType.UPDATE_PROJECT_FAILED: {
      return { ...state };
    }

    case ProjectsActionType.DELETE_PROJECT: {
      return {
        ...state,
      };
    }

    case ProjectsActionType.DELETE_PROJECT_SUCCESS: {
      let newState = state['projects'];
      newState = JSON.parse(JSON.stringify(newState));
      const index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return {
        ...state,
        projects: newState,
      };
    }

    case ProjectsActionType.DELETE_PROJECT_FAILED: {
      return { ...state };
    }

    default:
      return state;
  }
}
