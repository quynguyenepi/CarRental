import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';
import findCarReducer from './FindCarSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    findCar: findCarReducer,
  },
});
