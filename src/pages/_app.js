import '@/styles/globals.css'
import { Provider } from 'react-redux';
import {currencyStore} from './redux/Store';
export default function App({ Component, pageProps }) {
  return   <Provider store={currencyStore}><Component {...pageProps} /></Provider>
}
