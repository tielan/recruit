
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//注册
export function sendResumeAction(personal_id, company_id, post_id) {

  let param = { personal_id: personal_id, company_id: company_id, post_id: post_id };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.getUri(types.API_sendResume, param).then((responseData) => {
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
    result:undefined,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_sendResume_ACTION,
    errMsg: undefined,
    result: responseData,
  }
}
