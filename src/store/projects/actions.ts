import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Project } from '@/api/types';
import { apiGetProjects, apiCreateProject } from '@/api/projects';
import { PROJECTS_FETCHED, PROJECT_CREATED } from './constants';
import { ProjectActionTypes } from './types';

function fetchAction(projects: Project[]): ProjectActionTypes {
  return {
    type: PROJECTS_FETCHED,
    payload: projects,
  };
}

function createAction(project: Project): ProjectActionTypes {
  return {
    type: PROJECT_CREATED,
    payload: project,
  };
}

export function fetchProjects() {
  return async (dispatch: ThunkDispatch<{}, undefined, Action>) => {
    const projects = await apiGetProjects();
    dispatch(fetchAction(projects));
  };
}

export function createProject(project: Project) {
  return async (dispatch: ThunkDispatch<{}, undefined, Action>) => {
    const newProject = await apiCreateProject(project);
    dispatch(createAction(newProject));
  };
}
