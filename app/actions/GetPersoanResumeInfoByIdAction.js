
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'

//注册
export function getPersoanResumeInfoByIdAction(personal_id) {

  let param = { personal_id: personal_id };
  return dispatch => {
    dispatch(startActon());
    return FetchManger.getUri(types.API_getPersoanResumeInfoById, param).then((responseData) => {
      dispatch(receiveResult(responseData));
    }).catch((error) => {
      dispatch(receiveErrorResult(error));
    })
  };
}

export function editPersoanlResume(param) {

  return dispatch => {
    dispatch({
      type: types.START_editPersoanlResume_ACTION,
    });
    return FetchManger.postUri(types.API_editPersoanlResume, param).then((responseData) => {
      if (responseData.result === '1' || responseData.result === 1) {
        dispatch({
          type: types.SUCCESS_editPersoanl_ACTION,
          result: responseData.data,
        });
      } else {
        dispatch({
          type: types.ERROR_editPersoanl_ACTION,
          errMsg: responseData.msg,
        });
      }

    }).catch((error) => {
      dispatch({
        type: types.ERROR_editPersoanl_ACTION,
        errMsg: '网络出错',
      });
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
