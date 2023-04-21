import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencyData: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchCurrencyDataRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCurrencyDataSuccess: (state, action) => {
      state.isLoading = false;
      state.currencyData = action.payload;
    },
    fetchCurrencyDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCurrencyDataRequest, fetchCurrencyDataSuccess, fetchCurrencyDataFailure } = currencySlice.actions;

export const fetchCurrencyData = (countryName, currencyCode) => async dispatch => {
  try {
    dispatch(fetchCurrencyDataRequest());
    const response = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${process.env.NEXT_PUBLIC_CURRENCY_KEY}&symbols=${currencyCode}`);
    const rates = response.data.rates;
    const base =response.data.base;
    const countryRate = rates[countryName];
    const payload = {
      countryName,
      countryRate,
      currencyCode,
      rates,
      base,
    };
    dispatch(fetchCurrencyDataSuccess(payload));
  } catch (error) {
    dispatch(fetchCurrencyDataFailure(error.message));
  }
};

export default currencySlice.reducer;
