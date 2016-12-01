
import * as types from './ActionTypes';
import { request } from '../utils/RequestUtils';

export function fetchLogin(username, password) {
  return dispatch => {
    dispatch(fetchLoginStart());
    dispatch(receiveLoginResult());
  /*  let body = JSON.stringify({
      userName: username,
      password: password,
    });
    return request("", 'post', body, {'Accept': 'application/json', 'Content-Type': 'application/json',})
      .then((responseData) => {
        dispatch(receiveLoginResult(responseData));
      })
      .catch((error) => {
        console.error('fetchLogin error: ' + error);
        dispatch(receiveLoginResult());
      })*/
  }
}

function fetchLoginStart() {
  return {
    type: types.START_LOGIN_ACTION,
  }
}

function receiveLoginResult(responseData) {
  return {
    type: types.RECEIVE_LOGIN_RESULT,
    result: responseData,
  }
}
