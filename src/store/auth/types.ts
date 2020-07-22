import { LOGIN, LOGOUT } from './constants';

export interface AuthState {
  username: string | null;
  avatar: string | null;
}

interface LoginAction {
  type: typeof LOGIN,
  payload: AuthState
}

interface LogoutAction {
  type: typeof LOGOUT
}

export type AuthActionTypes = LoginAction | LogoutAction;
