import React, { FC, useState, useEffect } from 'react';
import './styles.scss';
import { Tabbar, Tab } from '@/components/Tabbar';
import { Button } from '@/components/Button';
import { fetchProjects } from '@/store/projects/actions';
import { useThunkDispatch } from '@/hooks/useThunkDispatch';
import { ProjectsList } from '../ProjectsList';
import { ProjectsForm } from '../ProjectsForm';

type ProjectsProps = {};

export const Projects: FC<ProjectsProps> = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    dispatch(fetchProjects()).then(() => setLoading(false));
  }, []);

  return (
    <div className="projects">
      <h1 className="projects__header">Проекты</h1>
      <Tabbar active={activeTab} onClick={(idx) => setActiveTab(idx)}>
        <Tab>Список проектов</Tab>
        <Tab>Дорожные карты</Tab>
      </Tabbar>
      <div className="projects__toolbar">
        <h3>Список проектов</h3>
        <Button size="small" onClick={() => setShowModal(true)}>Добавить проект</Button>
      </div>
      <ProjectsList loading={loading} />
      <ProjectsForm show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
