import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { WeatherForcast } from '../WeatherForcast';
import { getServerSideProps } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      weather: WeatherForcast.reducer,
    },
    middleware: [thunkMiddleware],
  });

const wrapper = createWrapper(makeStore);

export default wrapper;
