import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weathercard.css';

const Weathercard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = '3881095c1b8be3c9149aa352aa76443f';
    const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Amravati,Maharashtra,India`;

    axios.get(API_URL)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div>
      {weatherData && (
        <div className="card">
          <h2>{weatherData.location.name}</h2>
          <h3>
            {weatherData.current.weather_descriptions[0]}
            <span>Wind {weatherData.current.wind_speed} km/h <span className="dot">•</span> Precip {weatherData.current.precip} %</span>
          </h3>
          <h1>{weatherData.current.temperature}°</h1>
          <div className="sky">
            <div className="sun"></div>
            <div className="cloud">
              <div className="circle-small"></div>
              <div className="circle-tall"></div>
              <div className="circle-medium"></div>
            </div>
          </div>
          <table>
            <tr>
              <td>TUE</td>
              <td>WED</td>
              <td>THU</td>
              <td>FRI</td>
              <td>SAT</td>
            </tr>
            <tr>
              <td>30°</td>
              <td>34°</td>
              <td>36°</td>
              <td>34°</td>
              <td>37°</td>
            </tr>
            <tr>
              <td>17°</td>
              <td>22°</td>
              <td>19°</td>
              <td>23°</td>
              <td>19°</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
  
  
};

export default Weathercard;