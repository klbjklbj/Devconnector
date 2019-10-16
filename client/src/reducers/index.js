// combine all reducers into one reducer (root reducer)

import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

//bring in all reducers together
export default combineReducers({
  auth: authReducer,
  errors: errorReducer

})