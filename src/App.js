import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationList from './components/LocationList'
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;