
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

export function stopLoad(){
  return dispatch => {
    dispatch({stopLoad:true,type:types.STOP_loading_ACTION});
  }
}


export function fetchLogin(username, password) {
  return dispatch => {
    dispatch(fetchLoginStart());
    dispatch(receiveLoginResult());
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
//注册
/*
user_name: '',
user_password: '',
disability_code: '',
*/
export function fetchRegister(register) {

  let param = { user_name: register.user_name, user_password: register.user_password, disability_code: register.disability_code };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.postUri('personalRegist.do',param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
        dispatch(receiveErrorResult(error));
      })
  };
}

function startActon() {
  return {
    type: types.START_register_ACTION,
  }
}
function receiveErrorResult(errMsg) {
  return {
    type: types.RECEIVE_register_ACTION,
    errMsg: errMsg,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_register_ACTION,
    result: responseData,
  }
}
