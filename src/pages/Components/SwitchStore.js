// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';


// function reducer(state, action) {
//     switch (action.type) {
//       case 'WEATHER': return { show: state.weather }
//       case 'CURRENCY': return { show: state.currency }
//       case 'NO_WEATHER': return { show: state.no_weather }
//       case 'NO_CURRENCY': return { show: state.no_currency }
//       case 'BOTH': return { show: state.both }
//       default: return state
//     }
//   }
//   export const setShowData = data => ({
//     type: 'SET_WEATHER_DATA',
//     payload: data,
//   });
//   const store = configureStore({
//     reducer,
//     middleware: [thunk],
//   });
  
//   export default store;