import {createStore} from 'redux';

//vincular plugin devtools con nuestra aplicación
export const store = createStore(()=> {},
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
