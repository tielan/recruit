
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//注册
export function getCompanyInviteInfoAction(personal_id) {

  let param = { personal_id: personal_id };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.getUri(types.API_getCompanyInviteInfo,param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
        dispatch(receiveErrorResult(error));
      })
  };
}

function startActon() {
  return {
    type: types.START_getCompanyInviteInfo_ACTION,
  }
}
function receiveErrorResult(errMsg) {
  return {
    type: types.RECEIVE_getCompanyInviteInfo_ACTION,
    errMsg: errMsg,
  }
}
function receiveResult(responseData) {
  return {
    type: types.RECEIVE_getCompanyInviteInfo_ACTION,
    result: responseData,
  }
}
