import { Project } from '@/api/types';
import { PROJECTS_FETCHED, PROJECT_CREATED } from './constants';

export interface ProjectsState {
  projects: Project[],
}

interface FetchProjectsAction {
  type: typeof PROJECTS_FETCHED,
  payload: Project[],
}

interface CreateProjectAction {
  type: typeof PROJECT_CREATED,
  payload: Project,
}

export type ProjectActionTypes = FetchProjectsAction | CreateProjectAction;
