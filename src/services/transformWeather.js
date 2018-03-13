import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  THUNDER,
  DRIZZLE
} from './../constant/weathers';
const getWeatherState = (weather) => {
  const { id } = weather[0];
  if (id < 300) {
    return THUNDER
  } else if (id < 400) {
    return DRIZZLE
  } else if (id < 600) {
    return RAIN
  } else if (id < 700) {
    return SNOW
  } else if (id === 800) {
    return SUN
  } else {
    return CLOUDY
  }
}
const transformWeather = (weatherData) => {
  const { weather } = weatherData;
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weather);

  const data = {
    humidity,
    temperature: temp,
    weatherState,
    wind: `${speed}`
  }
  return data
}

export default transformWeather;