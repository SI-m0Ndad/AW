import React from 'react';
import WeatherLocation from './WeatherLocation'

const LocationList= () =>(
  <div>
    <WeatherLocation city= {'Santiago,scl'} />
    <WeatherLocation city= {'Bogotá,col'} />
    <WeatherLocation city= {'Rio de janeiro,br'} />
  </div>

)

export default LocationList;