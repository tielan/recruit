
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'
//注册
export function personalLoginAction(user_name, user_password) {

  let param = { user_name: user_name, user_password: user_password };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.postUri(types.API_personalLogin, param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
      dispatch(receiveErrorResult(error));
    })
  };
}

function startActon() {
  return {
    type: types.START_personalLogin_ACTION,
  }
}
function receiveErrorResult(errMsg) {
  return {
    type: types.RECEIVE_personalLogin_ACTION,
    errMsg: errMsg,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_personalLogin_ACTION,
    result: responseData,
  }
}
