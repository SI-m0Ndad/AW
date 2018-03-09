import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {createStore} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
// import {store} from './store';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
  }
  handleSelectionLocation = (city) => {
    this.setState({city});
    console.log( `handleSelectionLocation ${city}`);
    // store.dispatch(setCity(city));
    this.props.setCity(city);
  }

  render() {
    const {city} = this.state;
    return (
      <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs = {12} >
              <AppBar title= {'Weather Location'} />
          </Col>
        </Row>
        <Row>
          <Col xs = {12} md= {6} >
              <LocationList cities = {cities} onSelectLocation = {this.handleSelectionLocation}></LocationList>
          </Col>
          <Col xs = {12} md= {6}>
              <Paper zDepth = {4}>
              <div className="detail">
                {city === null ? <h2 className='forecast-title'>No se selecciono ninguna ciudad</h2> : <ForecastExtended city = {city} ></ForecastExtended>}                
              </div>
              </Paper>
          </Col>
        </Row>
       </Grid>
      </MuiThemeProvider>
    );
  }
}

//  esta funcion nos deja trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) =>({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;