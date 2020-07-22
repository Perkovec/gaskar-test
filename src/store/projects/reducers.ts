import { PROJECTS_FETCHED, PROJECT_CREATED } from './constants';
import { ProjectsState, ProjectActionTypes } from './types';

const initialState: ProjectsState = {
  projects: [],
};

export function projectsReducer(
  state = initialState,
  action: ProjectActionTypes,
): ProjectsState {
  switch (action.type) {
    case PROJECTS_FETCHED:
      return {
        ...state,
        projects: action.payload,
      };
    case PROJECT_CREATED:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    default:
      return state;
  }
}
