import axios from 'axios';

export async function fetchWeather(city, setError) {
  // console.log(process.env.REACT_APP_API_KEY);
  // const API_KEY = c46f07553e96b04e968aa741d19331d5;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=$c46f07553e96b04e968aa741d19331d5`;

  try {
    const response = await axios.get(url);
    setError('');
    console.log('response :>> ', response);
    return response.data;
  } catch (error) {
    setError('City Not Found!');
    return error;
  }
}
