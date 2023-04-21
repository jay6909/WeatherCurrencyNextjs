import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from '../styles/Layout.module.css'

const WeatherComp = ({ initialWeatherData }) => {

 
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(initialWeatherData);
  const [loading, setLoading] = useState(false);
  
//   const currencyViewStatus=initialState.one;
//   const weatherViewStatus=initialState.one;
//     const [viewCurrency, setViewCurrency] = useState(currencyViewStatus);
//     const [viewWeather, setViewWeather] = useState(weatherViewStatus);

  const fetchWeather = (e) => {
    e.preventDefault();
    if(city===""|| city===null){
    return;
    }
    e.preventDefault();
    setLoading(true);
    axios.get(getWeatherUrl(city)).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  const getWeatherUrl = (city) =>
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
      city
    )}&units=metric&cnt=7&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  return (
    <div className={styles.subcontainer}>
      <h2>Weather Section</h2>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter a location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          {loading ? <div>Loading...</div> : <BsSearch />}
        </button>
      </form>
      {weather ? (
        <div style={{width:'100%'}}>
            <div >
                <h2>{weather.city.name}</h2>
            {/* <h3>{weather.city.country}</h3> */}
            </div>

        <table className={styles.table}>
            
           
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature (°C)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{weather.list[0].dt_txt}</td>
              <td>{weather.list[0].main.temp} </td>
              <td>{weather.list[0].weather[0].main}</td>

            </tr>
            <tr>
              <td>{weather.list[1].dt_txt}</td>
              <td>{weather.list[1].main.temp} </td>
              <td>{weather.list[1].weather[0].main}</td>

            </tr>
            <tr>
              <td>{weather.list[2].dt_txt}</td>
              <td>{weather.list[2].main.temp} </td>
              <td>{weather.list[2].weather[0].main}</td>

            </tr>
            <tr>
              <td>{weather.list[3].dt_txt}</td>
              <td>{weather.list[3].main.temp} </td>
              <td>{weather.list[3].weather[0].main}</td>

            </tr>
            <tr>
              <td>{weather.list[4].dt_txt}</td>
              <td>{weather.list[4].main.temp} </td>
              <td>{weather.list[4].weather[0].main}</td>

            </tr>
            <tr>
              <td>{weather.list[5].dt_txt}</td>
              <td>{weather.list[5].main.temp} </td>
              <td>{weather.list[5].weather[0].main}</td>

            </tr>
            <tr>
              <td>{weather.list[6].dt_txt}</td>
              <td>{weather.list[6].main.temp}</td>
              <td>{weather.list[6].weather[0].main}</td>

            </tr>
        
          </tbody>

          {/* <p>Description: {weather.weather[0].description}</p> */}
        </table>
        </div>
      ) : (
        <div></div>
      )}
       
    </div>
  );
};

export default WeatherComp;

export async function getServerSideProps() {

  const initialWeatherData = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        city
      )}&units=metric&cnt=7&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    )
    .then((response) => response.data);

  return { props: { initialWeatherData } };

}
