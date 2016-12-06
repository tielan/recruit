
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//注册
export function getPersoanResumeInfoByIdAction(register) {

  let param = { user_name: register.user_name, user_password: register.user_password, disability_code: register.disability_code };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.postUri(types.API_getPersoanResumeInfoById,param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
        dispatch(receiveErrorResult(error));
      })
  };
}

function startActon() {
  return {
    type: types.START_getPersoanResumeInfoById_ACTION,
  }
}
function receiveErrorResult(errMsg) {
  return {
    type: types.RECEIVE_getPersoanResumeInfoById_ACTION,
    errMsg: errMsg,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_getPersoanResumeInfoById_ACTION,
    result: responseData,
  }
}
