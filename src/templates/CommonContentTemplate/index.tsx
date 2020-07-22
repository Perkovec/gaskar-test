import React, { FC, PropsWithChildren, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import { Sidebar, SidebarLink } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { RootState } from '@/store';
import { IconButton } from '@/components/IconButton';
import classNames from 'classnames';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import { logout } from '@/store/auth/actions';

type CommonContentTemplateProps = PropsWithChildren<{}>;

const avatarSelector = (state: RootState) => state.authReducer.avatar;

export const CommonContentTemplate: FC<CommonContentTemplateProps> = ({
  children,
}: CommonContentTemplateProps) => {
  const avatar = useSelector(avatarSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const exit = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <div className="common-content">
      <div
        className={classNames('common-content__sidebar-backdrop', {
          'common-content__sidebar-backdrop--hidden': !showSidebar,
        })}
        onClick={toggleSidebar}
      />
      <div
        className={classNames('common-content__col-1', {
          'common-content__col-1--hidden': !showSidebar,
        })}
      >
        <div className="common-content__placeholder">Logo</div>
        <Sidebar onClick={toggleSidebar}>
          <SidebarLink icon={faTh} to="/tasks-jobs">
            Задачи и работы
          </SidebarLink>
          <SidebarLink icon={faTh} to="/projects">
            Проекты
          </SidebarLink>
          <SidebarLink icon={faTh} to="/calendar">
            Календарь
          </SidebarLink>
          <SidebarLink icon={faTh} to="/abilities">
            Возможности
          </SidebarLink>
        </Sidebar>
      </div>
      <div className="common-content__col-2">
        <Header
          prefixEl={
            <IconButton className="common-content__sidebar-toggle" icon={faBars} onClick={toggleSidebar} />
          }
        >
          <button onClick={exit} className="avatar" style={{ backgroundImage: `url(${avatar})` }} />
        </Header>
        <main className="common-content__main">
          {children}
        </main>
      </div>
    </div>
  );
};
