import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br'
];

class App extends Component {
  handleSelectionLocation = (city) => {
    console.log('handleSelectionLocation')
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities = {cities} onSelectLocation = {this.handleSelectionLocation}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;