import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from './API KEY'; 

function Page() {
  const [data, setData] = useState({});
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const api_key = API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  const searchLongitude = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const searchLatitude = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const handleInputChange = (event) => {
    const value = parseFloat(event.target.value);
    setLongitude(isNaN(value) ? 0.0 : value);
  };

  const handleInputChange1 = (event) => {
    const value1 = parseFloat(event.target.value);
    setLatitude(isNaN(value1) ? 0.0 : value1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchLongitude();
    }
  };

  const handleKeyDown1 = (event) => {
    if (event.key === 'Enter') {
      searchLatitude();
    }
  };

  return (
    <div>
      <div className="search">
        <input
          value={longitude}
          placeholder="Longitude"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          step="0.01"
          type="number"
        />
        <input
          value={latitude}
          placeholder="Latitude"
          onChange={handleInputChange1}
          onKeyDown={handleKeyDown1}
          step="0.01"
          type="number"
        />
      </div>
      <div className="container">
        <div className="top">
            <div className="location">
                <p>Islamabad</p>
            </div>
            <div className="temp">
                <h1>25°C</h1>
            </div>
            <div className="description">
                <p>Cloudy</p>
            </div>
        </div>
        <div className="bottom">
            <div className="feels-like">
                <p>Feels Like: <b>27°C</b></p>
            </div>
            <div className="humidity">
                <p>Humidity: <b>25%</b></p>
            </div>
            <div className="wind">
                <p>Wind: <b>20 KM/H</b></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page
