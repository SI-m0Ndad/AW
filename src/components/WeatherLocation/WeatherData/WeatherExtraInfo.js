import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='weatherExtraInfoCont'>
    <span className='weatherExtraInfo'>{`Humedad: ${humidity}% - `}</span>
    <span className='weatherExtraInfo'>{`Viento: ${wind} wind`}</span>
  </div>
  )
WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;