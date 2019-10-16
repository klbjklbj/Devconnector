//this file is to write a function that triggers a dispatch call
//then that function will be hooked up to UI

//bring in dispatcher
import { SET_CURRENT_USER, GET_ERRORS } from "./types";
import axios from "axios";

// Register user
// Action = registerUser
// called when register button clicked
// userData is from form
// authReducer is listening for this dispatch call
// history is where component should go next
export const registerUser = (userData,history) => dispatch => {
  //send userData object to API to write data in mongoDB
  axios
    .post("api/users/register", userData)
    //if successful route user to login component
    .then(res => history.push('/login'))
    //if something goes wrong, make dispatch call and pass error data to it
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
