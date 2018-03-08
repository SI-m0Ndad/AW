import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

/*
const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

const data = {
  temperature :10,
  humidity: 10,
  weatherState: 'normal',
  wind: 'normal'
}
*/
const api_key = '52f5de339c3ea22f9d1900783c7e474e';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor(){
    super();
    this.state = {
      forecastData: null
    }
  }

componentDidMount(){
       const url_forecast= `${url}?q=${this.props.city}&appid=${api_key}`;
       fetch(url_forecast)
       .then(data =>(data.json())
       ).then(weather_data => {
           console.log(weather_data);
           const forecastData = transformForecast(weather_data);
           console.log(forecastData);
           this.setState({forecastData})
       })
}

  renderForecastItemDays(forecastData){
    return forecastData.map(forecast=>(
      <ForecastItem 
      key = {`${forecast.weekDay}${forecast.hour} `}
      weekDay = {forecast.weekDay} 
      hour ={forecast.hour} 
      data= {forecast.data}></ForecastItem>));
    // return days.map(day=>(<ForecastItem key = {days} weekDay = {day} hour ={10} data= {data} ></ForecastItem>));
  }

  renderProgress(){
    return ( <h3>Cargando pronóstico extendido...</h3> )
  }

   render () {
       const { city } = this.props;
       const { forecastData } = this.state;
       return (
           <div> <h2 className='forecast-title'>Pronóstico extendido para:  {city}</h2>
           {forecastData !== null ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
           
           </div>           
       )
   }
}

ForecastExtended.propTypes = {
   city: PropTypes.string.isRequired,
}

export default ForecastExtended;