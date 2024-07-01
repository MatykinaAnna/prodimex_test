import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import loginReducer from '../pages/login/model/login-reducer';
import reducer from '../shared/components/secondHead/model/reducer';
import mapReducer from '../shared/components/mapComponent/model/marReducer';

export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  filtersReducer: reducer,
  mapReducer: mapReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
