import React, { FC, ElementType } from 'react';
import { Route, Redirect } from 'react-router-dom';

type AuthMethod = () => boolean;

type AuthRouteProps = {
  isAuth: boolean | AuthMethod,
  redirectPath?: string,
  path?: string,
  component: ElementType,
  exact?: boolean,
};

type LayoutRouteProps = {
  layout: ElementType,
  component: ElementType,
  path: string,
  exact?: boolean,
};

function checkAuth(auth: boolean | AuthMethod): boolean {
  return typeof auth === 'function' ? auth() : auth;
}

export const AuthRoute: FC<AuthRouteProps> = ({
  component: Comp,
  isAuth,
  redirectPath = '/login',
  ...rest
}: AuthRouteProps) => (
  <Route
    {...rest}
    render={(props) => (checkAuth(isAuth)
      ? <Comp {...props} />
      : <Redirect to={{ pathname: redirectPath, state: { from: props.location } }} />)}
  />
);

export const LayoutRoute: FC<LayoutRouteProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}: LayoutRouteProps) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )}
  />
);
