import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../../constant/weathers';
import './style.css'
const apiKey = '9458dc6884a325ca7ac96b2f3590bc09';

const url = 'http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component {
  constructor({ city }) {
    console.log('constructor');
    super();
    this.state = {
      city,
      data: null,
    }
  }
  componentWillMount() {
      const { city } = this.state;
      const apiWeather = `${url}?q=${city}&appid=${apiKey}&units=metric`;
      fetch(apiWeather).then(data => {
        return data.json();
      }).then(weatherData => {
        const data = transformWeather(weatherData);
        this.setState({ data })
      })
    }
    /*  componentDidMount() {
       console.log('componentDidMount');
     }
     componentWillUpdate() {
       console.log('componentWillUpdate');
     }
     componentDidUpdate() {
       console.log('componentDidUpdate');
     } */

  render = () => {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return ( <div className = 'weatherLocation'
        onClick = { onWeatherLocationClick } ><Location city = { city }/> {
        data !== null ? < WeatherData data = { data }
        /> : <CircularProgress size={60} thickness={7}/>
      } </div>
  )
}
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;