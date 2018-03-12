import React, {Component} from 'react';
//  conectar con los estados y los resultados se los agrega al componente
import { connect } from 'react-redux'; 
import { setCity } from './../actions/';
import LocationList from './../components/LocationList';
//  componentes puros no llevan llavecitas

class LocationListContainer extends Component {
  handleSelectionLocation = (city) => {
    this.props.setCity(city);
  }
  render(){
    // los componentes creados deben ir siempre dentro de una funcion render que los dibuje
    // y dentro de un return con un div
    return(
     <div>
       <LocationList cities = {this.props.cities} onSelectLocation = {this.handleSelectionLocation}></LocationList>
     </div>
    )
  }  
}
//  esta funcion nos deja trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) =>({
  setCity: value => dispatch(setCity(value))
});
// esta funcion nos permite nuestro componente pueda estar conectado con nuestros estados
export default connect(null, mapDispatchToPropsActions)(LocationListContainer);