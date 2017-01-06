
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//注册
export function personalForgetAction(user_name,disability_code,user_password) {

  let param = { user_name: user_name, user_password: user_password, disability_code: disability_code };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.postUri(types.API_personalForgetPassWord,param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
        dispatch(receiveErrorResult(error));
      })
  };
}

function startActon() {
  return {
    type: types.START_personalForgetPassWord_ACTION,
  }
}
function receiveErrorResult(errMsg) {
  return {
    type: types.RECEIVE_personalForgetPassWord_ACTION,
    errMsg: errMsg,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_personalForgetPassWord_ACTION,
    result: responseData,
  }
}
