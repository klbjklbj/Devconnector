import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers'; //don't need to say /index
import thunk from 'redux-thunk';

const initialState={};
const middleware=[thunk]; // breaks data into small parts

// create store
// only reducers can write to store
const store = createStore(
  // Create store takes three parameters

  // 1)array of reducers that can write to store
  rootReducer, //replaces array

  // 2)initial data to put into store
  initialState,

  // 3) enhancers/extensions for transformations (?)
  // ... is spread operator -- copies original then makes changes on it so we can still see old data
  //spread data then thunk it
  compose(
    //use compose for multiple enhancements
    applyMiddleware(...middleware), //first enhancement
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //second enhancement...shows developers store info in debug window
  )
);

export default store;