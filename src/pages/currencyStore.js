import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../new/currencySlice';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
