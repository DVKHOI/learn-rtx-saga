import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import authReducer from 'features/auth/authSlice';
import { history } from 'utils';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
