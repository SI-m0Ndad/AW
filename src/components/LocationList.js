import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import './WeatherLocation/WeatherData/styles.css';



const LocationList = ({cities, onSelectLocation}) =>{
  const handleWeatherLocationClick = (city) =>{
    console.log('handleWeatherLocationClick');
    onSelectLocation(city);
  }
  const strToComponent = (cities) =>(
    cities.map(city => (
      <Paper zDepth = {1}>
        <WeatherLocation 
          key = {city} 
          city = {city}
          onWeatherLocationClick = {()=> handleWeatherLocationClick(city) }
        />
      </Paper>
    ))
  )
  return(
    <div className = 'locationList'>
      {strToComponent(cities)}
    </div>
  )
}


LocationList.PropTypes = {
  cities : PropTypes.array.isRequired,
  onSelectLocation: PropTypes.func,
}

export default LocationList;