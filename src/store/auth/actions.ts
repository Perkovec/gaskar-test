import { Dispatch } from 'redux';
import { User } from '@/api/types';
import { apiLogin } from '@/api/auth';
import { LOGIN, LOGOUT } from './constants';
import { AuthActionTypes } from './types';

function loginAction(userData: User): AuthActionTypes {
  return {
    type: LOGIN,
    payload: userData,
  };
}

function logoutAction(): AuthActionTypes {
  return {
    type: LOGOUT,
  };
}

export function login(username: string, password: string) {
  return async (dispatch: Dispatch) => {
    const loginData = await apiLogin(username, password);
    dispatch(loginAction(loginData));
  };
}

export function logout() {
  return (dispatch: Dispatch) => {
    dispatch(logoutAction());
  };
}
