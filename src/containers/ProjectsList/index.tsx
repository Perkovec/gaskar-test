/* eslint-disable react/no-array-index-key */
import React from 'react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { Spinner } from '@/components/Spinner';
import { ProjectItem } from '@/components/ProjectItem';
import './styles.scss';

const projectsSelector = (state: RootState) => state.projectsReducer.projects;

type ProjectsListProps = {
  loading?: boolean;
};

export const ProjectsList = ({
  loading = false,
}: ProjectsListProps) => {
  const projects = useSelector(projectsSelector);

  return (
    <div className="projects-list">
      {loading && <Spinner size="large" color="secondary" />}
      {!loading && projects.map((project, key) => <ProjectItem key={key} {...project} />)}
    </div>
  );
};
