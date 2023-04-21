import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { getServerSideProps } from 'next-redux-wrapper';

import currencyReducer from '../new/currencySlice';
import thunk from 'redux-thunk';


const makeStore = () =>
  configureStore({
    reducer: {
      weather: WeatherForcast.reducer,
    },
    middleware: [thunkMiddleware],
  });

const wrapper = createWrapper(makeStore);

export  {wrapper};



function reducer(state, action) {
    switch (action.type) {
      case 'WEATHER': return { show: state.weather }
      case 'CURRENCY': return { show: state.currency }
      case 'NO_WEATHER': return { show: state.no_weather }
      case 'NO_CURRENCY': return { show: state.no_currency }
      case 'BOTH': return { show: state.both }
      default: return state
    }
  }
  export const setShowData = data => ({
    type: 'SET_WEATHER_DATA',
    payload: data,
  });
  const store = configureStore({
    reducer,
    middleware: [thunk],
  });
  
  export  {store};



const currencyStore = configureStore({
  reducer: {
    currency: currencyReducer,
  },
  middleware: [thunkMiddleware],
});

export  {currencyStore};

