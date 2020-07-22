import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducers';
import { projectsReducer } from './projects/reducers';

const rootReducer = combineReducers({
  authReducer,
  projectsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
