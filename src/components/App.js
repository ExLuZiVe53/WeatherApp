import './App.css';
import { fetchWeather } from './api';
import React, { useState } from 'react';
import { WeatherCard } from './WeatherCard.jsx';

export function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChange = event => {
    setCity(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      setWeather(weather);
    } catch (error) {
      setError('City not found');
    }
  };

  console.log(handleSubmit());

  return (
    <div className="App">
      <h1 className="app_heading">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {error ? (
        <p className="error">{error}</p>
      ) : (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}
