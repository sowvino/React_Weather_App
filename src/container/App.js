import React, { useState } from 'react';
import './App.css';
import Cardlist from '../components/Cardlist.js';
import { API_KEY } from './Api.js';
import { CITY_URL } from './Api.js';
import { WEATHER_URL } from './Api.js';
import axios from 'axios';
import ErrorBoundry from '../components/ErrorBoundry.js';
import ScaleLoader from "react-spinners/ScaleLoader";



function App() {
  ///Assigning the variables to be used 
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState();

  ///Getting Forecast from AccuWeather Api
  async function searchForecast() {
    setWeather();
    setLoading(true);

    ///Fetching Apikey and Cityurl from API.JS 
    axios.get(`${CITY_URL}apikey=${API_KEY}&q=${city}`)
      .then(response => {
        setLoading(false);
        ///Response data is greater than 0 then return the value
        if (response.data.length > 0) {
          axios.get(`${WEATHER_URL}${response.data[0].Key}?apikey=${API_KEY}&metric=true`)
            .then(response => {
              setWeather(response.data);
            })
        }
      });
  }


  const handleWeather = (e) => {
    e.preventDefault();
    searchForecast();
  }
  ///Fetching city name from input target field
  const name = (e) => {
    setCity(e.target.value);
  }

  return (
    <div className='tc' >
      <header className='f1 mt5 '>
        Weather APP
      </header>
      <form className='container  pa2' >
        <input className="pa3 ba b--silver bg-washed-red "
          autoComplete='off'
          onChange={name}
          placeholder='Enter city Name'
        />
        <button type='submit' className='pv3  bn bg-animate bg-black-70 
        hover-bg-black white pointer br--right-ns' onClick={handleWeather}>Weather Info!!</button>

      </form>
      {city && (<ScaleLoader loading={loading} size={30} color="#FF6300" />)}
      <ErrorBoundry>

        {weather && (<Cardlist city={city} weather={weather} />)}

      </ErrorBoundry>
      <div className='bg-silver'>©️ 2022 sowmi_vino</div>

    </div>
  );
}

export default App;
