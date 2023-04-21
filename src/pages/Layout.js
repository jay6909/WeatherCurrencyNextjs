import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import WeatherComp from "./WeatherComp";
import CurrencyPage from "./CurrencyPage";
import ToggleSwitch from "./Components/Toggleswitch";
import { useState } from "react";

const Layout = ({ children }) => {
  const [weatherState, setWeatherState] = useState(false);
  const [currency, setCurrency] = useState(false);

  console.log(weatherState);
  const getCurrencyStats = (data) => {
    console.log("currency-----", data);
    setCurrency(!data);
  };
  const getWeatherStats = (data) => {
    console.log("weather-----", data);
    setWeatherState(!data);
  };
  const [isSettingvisible, setIsSettingvisible] = useState(false);
  const showSettings = () => {
    if (!isSettingvisible) {
      document.getElementById("settings").style.display = "flex";
      setIsSettingvisible(true);
    } else {
      document.getElementById("settings").style.display = "none";
      setIsSettingvisible(false);
    }
  };
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <h2>Assessment</h2>
            </li>
            <li>
              <h3 onClick={showSettings}>Settings Menu</h3>
            </li>
            <li>
              <Link href="/currency">Currency</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
        <div className={styles.main_container}>
          <div id="settings" className={styles.toggle_container_none}>
            <h3>Show Weather</h3>
            <ToggleSwitch onSubmit={getWeatherStats} />
            <h3>Show Currency</h3>

            <ToggleSwitch onSubmit={getCurrencyStats} />
          </div>
          {weatherState ? <WeatherComp /> : <div></div>}

          {currency ? <CurrencyPage /> : <div></div>}
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.main_footer_section}>
          <div className={styles.footer_sections}>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
          </div>
          <div className={styles.footer_sections}>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
          </div>
          <div className={styles.footer_sections}>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
          </div>
        </div>
        <p>&copy; 2023 Weather Currency App</p>
      </footer>
    </>
  );
};

export default Layout;
