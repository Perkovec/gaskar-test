import { Project } from './types';
import { asyncTimer } from '../lib/asyncTimer';

const projects: Project[] = [{
  category: 'Медицина',
  title: 'Терапевтический корпус',
  dateStart: new Date(2019, 4, 8),
  dateEnd: new Date(2021, 1, 31),
  lead: 'Денис Конев',
  administrator: 'Гросолим Лимитед',
  customer: 'Hadassah Medical',
}];

// for testing purpose
// projects.push(...new Array(20).fill(projects[0]));

export async function apiGetProjects(): Promise<Project[]> {
  await asyncTimer(1500);

  return projects.map((project) => ({ ...project }));
}

export async function apiCreateProject(project: Project): Promise<Project> {
  await asyncTimer(1500);

  const newProject = {
    ...project,
    dateStart: new Date(project.dateStart),
    dateEnd: new Date(project.dateStart),
  };
  projects.push(newProject);

  return { ...newProject };
}
