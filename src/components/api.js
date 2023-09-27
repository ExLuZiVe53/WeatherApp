import axios from 'axios';

export async function fetchWeather(city, setError) {
  const API_KEY = c46f07553e96b04e968aa741d19331d5;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    setError('');
    return response.data;
  } catch (error) {
    setError('City Not Found!');
    return error;
  }
}
