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
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState();


  const searchForecast = async function () {
    setWeather();
    setLoading(true);

    axios.get(`${CITY_URL}apikey=${API_KEY}&q=${city}`)
      .then(response => {
        setLoading(false);
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
  const name = (e) => {
    setCity(e.target.value);
  }
  return (
    <div >
      <header className='f1 tc mt5 '>
        Weather APP
      </header>
      <form className='container tc pa2' >
        <input className="pa3 ba b--silver bg-washed-red "
          autoComplete='off'
          onChange={name}
          placeholder='Enter city Name'
        />
        <button type='submit' className='pv3 tc bn bg-animate bg-black-70 
        hover-bg-black white pointer br--right-ns' onClick={handleWeather}>Weather Info!!</button>

      </form>
      {city && (<ScaleLoader loading={loading} size={30} color="#FF6300" className='tc' />)}
      <ErrorBoundry>

        {weather && (<Cardlist city={city} weather={weather} />)}

      </ErrorBoundry>
      <div className='tc bg-silver'>©️ 2022 sowmi_vino</div>

    </div>
  );
}

export default App;
