import { LOGIN, LOGOUT } from './constants';
import { AuthState, AuthActionTypes } from './types';

const initialState: AuthState = {
  username: null,
  avatar: 'https://i.pravatar.cc/100', // null,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes,
): AuthState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
        avatar: action.payload.avatar,
      };
    case LOGOUT:
      return {
        ...state,
        username: null,
        avatar: null,
      };
    default:
      return state;
  }
}
