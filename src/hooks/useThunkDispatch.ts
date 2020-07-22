import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

export const useThunkDispatch = () => useDispatch<ThunkDispatch<{}, undefined, Action>>();
