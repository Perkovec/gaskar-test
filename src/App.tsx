import React, { FC, ElementType } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '@/containers/Login';
import { Projects } from '@/containers/Projects';
import { CenterContentTemplate } from '@/templates/CenterContentTemplate';
import { CommonContentTemplate } from '@/templates/CommonContentTemplate';
import { AuthRoute, LayoutRoute } from '@/lib/extraRouting';
import { RootState } from '@/store';

type AppProps = {};

const selectUsername = (state: RootState) => state.authReducer.username;

const withAuth = (component: ElementType, isAuth: boolean) => () => (
  <AuthRoute
    isAuth={isAuth}
    component={component}
  />
);

export const App: FC<AppProps> = () => {
  const username = useSelector(selectUsername);

  return (
    <div className="app">
      <Switch>
        <AuthRoute
          path="/"
          exact
          isAuth={Boolean(username)}
          component={() => (
            <Redirect to="/projects" />
          )}
        />

        <LayoutRoute path="/login" layout={CenterContentTemplate} component={Login} />

        <LayoutRoute path="/projects" layout={CommonContentTemplate} component={withAuth(Projects, Boolean(username))} />
        <LayoutRoute path="/tasks-jobs" layout={CommonContentTemplate} component={() => <div>Задачи и работы</div>} />
        <LayoutRoute path="/calendar" layout={CommonContentTemplate} component={() => <div>Календарь</div>} />
        <LayoutRoute path="/abilities" layout={CommonContentTemplate} component={() => <div>Возможности</div>} />
      </Switch>
    </div>
  );
};
