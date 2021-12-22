import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const confStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
  });
};

const store = confStore();

export { store, confStore };
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
