import React, { useState } from 'react';
import axios from 'axios';
import { apikey } from './API_Key';

function Page() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const api_key = apikey;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;

  const searchLocation = () => {
    axios.get(weatherUrl)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  return (
    <div>
      <div className="search">
        <input
          value={location}
          placeholder="Enter City"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name && <p>{data.name}, {data.sys.country}</p>}
          </div>
          <div className="temp">
            <h1>{data.main && data.main.temp ? `${data.main.temp}°C` : ''}</h1>
          </div>
          <div className="description">
            <p>{data.weather && data.weather[0] ? data.weather[0].description : ''}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels-like">
            <p>Feels Like: <b>{data.main && data.main.feels_like ? `${data.main.feels_like}°C` : ''}</b></p>
          </div>
          <div className="humidity">
            <p>Humidity: <b>{data.main && data.main.humidity ? `${data.main.humidity}%` : ''}</b></p>
          </div>
          <div className="wind">
            <p>Wind: <b>{data.wind && data.wind.speed ? `${data.wind.speed} KM/H` : ''}</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
