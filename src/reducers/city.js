import { SET_CITY } from './../actions'
 
export const city = (state, action) => {
  switch (action.type) {
    case SET_CITY: 
    // es importante pones el cambio de estado asi y no colocarlo de la nada
    return { ...state, city:action.value} // ... = operador de propagacion
    default:
    return state;
  }  
}