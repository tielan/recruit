
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//注册
export function sendResumeAction(register) {

  let param = { user_name: register.user_name, user_password: register.user_password, disability_code: register.disability_code };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.postUri(types.API_sendResume,param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
        dispatch(receiveErrorResult(error));
      })
  };
}

function startActon() {
  return {
    type: types.START_sendResume_ACTION,
  }
}
function receiveErrorResult(errMsg) {
  return {
    type: types.RECEIVE_sendResume_ACTION,
    errMsg: errMsg,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_sendResume_ACTION,
    result: responseData,
  }
}
