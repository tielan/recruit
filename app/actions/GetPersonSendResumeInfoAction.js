
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//注册
export function getPersonSendResumeInfoAction(personal_id) {

  let param = { personal_id: personal_id };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.postUri(types.API_getPersonSendResumeInfo, param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
      dispatch(receiveErrorResult(error));
    })
  };
}

function startActon() {
  return {
    type: types.START_getPersonSendResumeInfo_ACTION,
  }
}
function receiveErrorResult(errMsg) {
  return {
    type: types.RECEIVE_getPersonSendResumeInfo_ACTION,
    errMsg: errMsg,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_getPersonSendResumeInfo_ACTION,
    result: responseData,
  }
}
