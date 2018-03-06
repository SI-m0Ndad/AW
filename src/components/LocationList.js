import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';



const LocationList = ({cities, onSelectLocation}) =>{
  const handleWeatherLocationClick = (city) =>{
    console.log('handleWeatherLocationClick');
    onSelectLocation(city);
  }
  const strToComponent = (cities) =>(
    cities.map(city => (
      <WeatherLocation 
        key = {city} 
        city = {city}
        onWeatherLocationClick = {()=> handleWeatherLocationClick(city) }
      />
    ))
  )
  return(
    <div>
      {strToComponent(cities)}
    </div>
  )
}


LocationList.PropTypes = {
  cities : PropTypes.array.isRequired,
  onSelectLocation: PropTypes.func,
}

export default LocationList;