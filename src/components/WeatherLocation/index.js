import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
// import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from '../../constant/weathers';
const api_key = '52f5de339c3ea22f9d1900783c7e474e';
//const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather'

// const data1 = {
//   temperature:32,
//   weatherState: SUN,
//   humidity: 2,
//   wind: '10 m/s'
// }
// const data2 = {
//   temperature: 3,
//   weatherState: SNOW,
//   humidity: 1,
//   wind: '50 m/s'
// }
class WeatherLocation extends Component {
  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null
    }
  }
 
    // this.setState({
    //   city: 'Santiago',
    //   data: data2,
    // })


  componentWillMount() {
    const  { city } = this.state;
    const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({data});
    })
  }
  // componentDidMount() {
  //   console.log('ComponentDidMount');
  // }
  // componentWillUpdate() {
  //   console.log('ComponentWillUpdate');
  // }
  // componentDidUpdate() {
  //   console.log('ComponentDidUpdate');
  // }
  render = () => {
    const { onWeatherLocationClick } = this.props;
    const {city, data} = this.state;
    return(
      <div className='weatherLocation' onClick = {onWeatherLocationClick} >
        <Location city = {city}/>
        { data !== null ? <WeatherData data={data} /> : <CircularProgress size={60} thickness={7} />
        }
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

// const WeatherLocation = () => (
//     <div className='weatherLocation'>
//       <Location city = {'Chill??n'}/>
//       <WeatherData data = {data}/>
//     </div>
// )
export default WeatherLocation;