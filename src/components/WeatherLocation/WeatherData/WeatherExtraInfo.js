import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity,wind}) => (
  <div className='weatherExtraInfoCont'>
    <span className='weatherExtraInfo'>{`Humedad: ${humidity}% - `}</span>
    <span className='weatherExtraInfo'>{`Vientos: ${wind} m/s`}</span>
  </div>
)
WeatherExtraInfo.protoTypes={
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;