// this is file to write authentication info into store, also clears out

import {SET_CURRENT_USER} from '../actions/types'; //import dispatcher
import isEmpty from '../validation/is-empty';

// need to tell reducer info (data) to write to store and action that triggers

// what authReducer is to write into store initially
const initialState={
  isAuthenticated: false,
  user:{}
};

// action comes with both a type and a payload (data)
export default function(state=initialState, action){
  switch(action.type){ // action has a type property
    case SET_CURRENT_USER: //if dispatch call comes to set current user
      return { //return is going into store
        ...state, //take existing state ?
        isAuthenticated: !isEmpty(action.payload), // if payload is not empty then authenticated flag is true
        user: action.payload //payload is written in user object
      };
    default:
      return state;
  }
}