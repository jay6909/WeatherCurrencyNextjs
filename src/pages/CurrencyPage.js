import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyData } from '../new/currencySlice';
import styles from '../styles/Layout.module.css'
import { BsSearch } from "react-icons/bs";

function CurrencyPage() {
  const dispatch = useDispatch();
  const { currencyData, isLoading, error } = useSelector(state => state.currency);
  const [countryName, setCountryName] = useState('');
  const [currencyCode, setCurrencyCode] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!currencyCode) {
      return;
    }
    dispatch(fetchCurrencyData(countryName, currencyCode));
    console.log(currencyData);
  };

  return (
    <div className={styles.subcontainer}>
      <h1>Check Current Exchange Rate</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Enter currency code"
          value={currencyCode} onChange={e => setCurrencyCode(e.target.value)}
        />
        <button type="submit">
          {isLoading ? <div>Loading...</div> : <BsSearch />}
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {currencyData && (
        <div className={styles.currency_result}>
         <div> <h2>{currencyData.countryName} Exchange Rate</h2>
          <p>Base Currency: {currencyData.currencyCode}</p>
          <p>Current ZExchange Rate: {currencyData.countryRate}</p>
          <ul>
          {Object.entries(currencyData.rates).map(([currency, rate]) => (
              <li key={currency}>
                USD: {rate}
              </li>
            ))}
          </ul></div>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default CurrencyPage;