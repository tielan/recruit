
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'
/**
	hot_recommend	string	热门岗位推荐（1：是，0否）
 */
export function getHotCompanyByAction(start = 0, count = 0) {
  return dispatch => {
    dispatch({
      type: types.START_Home_getCompanyByParam_ACTION,
    });
    return FetchManger.getUri(types.API_getCompanyByParam, { hot_recommend: '1' }).then((responseData) => {
      console.log('success');
            if (responseData.result === '1' || responseData.result === 1) {
        dispatch(successhomeAction(responseData.data));
      } else {
        dispatch(errorhomeAction(responseData.msg));
      }
    }).catch((error) => {
      console.log(error);
      dispatch(errorhomeAction(error));
    })
  };
}

function starthomeAction() {
  return {
    type: types.START_Home_getCompanyByParam_ACTION,
  };
}
function successhomeAction(data) {
  return {
    type: types.RECEIVE_Home_getCompanyByParam_ACTION,
    result: data,
  };
}
function errorhomeAction(error) {
  return {
    type: types.RECEIVE_Home_getCompanyByParam_ACTION,
    errMsg: error,
  };
}