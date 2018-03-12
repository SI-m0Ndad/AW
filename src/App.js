import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './container/LocationListContainer';
import ForecastExtendedContainer from './container/ForecastExtendedContainer';
import './App.css';

const cities = [
  'Santiago,scl',
  'Buenos Aires,ar',
  'Bogotá,col',  
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br'
];

// app ahora solo renderiza ya no esta manejando estados
class App extends Component {
  render() {
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
            <LocationListContainer cities= {cities} ></LocationListContainer>
          </Col>
          <Col xs = {12} md= {6}>
              <Paper zDepth = {4}>
              <div className="detail">
                  <ForecastExtendedContainer ></ForecastExtendedContainer>           
              </div>
              </Paper>
          </Col>
        </Row>
       </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
