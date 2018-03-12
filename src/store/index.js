import {createStore} from 'redux';
import { city } from './../reducers/city';

//crear estado inicial para que no salga undefined
const initialState={
  city: 'Santiago,scl'
}
//vincular plugin devtools con nuestra aplicación
export const store = createStore(city, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
//reducer toman el estado anterior y la funcion y los devuelve un estado nuevo