import {GET_ERRORS} from '../actions/types';

//there are no errors when application starts so it's an empty object
const initialState={};

//takes in two parameters -- 1)state  and 2)action
export default function(state=initialState, action){
  switch(action.type){
    case GET_ERRORS:
      //return in reducer is data to be sent to store
      //don't need to spread to strack change in errors (optional)
      return action.payload;
    default:
      return state; //initialState called first time app runs
  }
}

