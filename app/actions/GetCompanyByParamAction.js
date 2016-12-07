
import * as types from './ActionTypes';
import { FetchManger } from 'react-native-go'
/*
根据不同的工作类型获取相应的岗位要求信息
请求参数	参数名	类型	参数说明
	work_type	string	工作类型（1:全职，2:兼职，3:实习）
	addr_area	string	地区
	industry	string	行业
	post_name	string	岗位名称
	salary_type	string	薪资
	hot_recommend	string	热门岗位推荐（1：是，0否）
  */
export function getCompanyByParamAction(work_type, addr_area, industry, post_name, salary_type) {

  let param = { work_type: work_type, addr_area: addr_area, industry: industry, post_name: post_name, salary_type: salary_type, hot_recommend: '0' };
  return dispatch => {
    dispatch({
      type: types.START_getCompanyByParam_ACTION,
    });
    return FetchManger.getUri(types.API_getCompanyByParam, param).then((responseData) => {
      dispatch({
        type: types.RECEIVE_getCompanyByParam_ACTION,
        result: responseData,
      });
    }).catch((error) => {
      dispatch({
        type: types.RECEIVE_getCompanyByParam_ACTION,
        errMsg: error,
      });
    })
  };
}
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
      if (responseData.result === '1') {
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