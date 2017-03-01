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

    let param = { work_type: work_type };
    if (addr_area) {
        param.addr_area = addr_area;
    }
    if (industry) {
        param.industry = industry;
    }
    if (post_name) {
        param.post_name = post_name;
    }
    if (salary_type) {
        param.salary_type = salary_type;
    }
    return dispatch => {
        dispatch({
            type: types.START_zhiweilist_ACTION,
        });
        return FetchManger.getUri(types.API_getCompanyByParam, param).then((responseData) => {
            if (responseData.result === '1' || responseData.result === 1) {
                dispatch({
                    type: types.SUCCESS_zhiweilist_ACTION,
                    result: responseData.data,
                });
            } else {
                dispatch({
                    type: types.ERROR_zhiweilist_ACTION,
                    errMsg: responseData.msg,
                });
            }

        }).catch((error) => {
            dispatch({
                type: types.ERROR_zhiweilist_ACTION,
                errMsg: error,
            });
        })
    };
}

export function updateParam(addr_area, industry,post_name,salary_type) {
   return  dispatch => { dispatch({
        type: types.Update_zhiweilist_ACTION,
        addr_area: addr_area,
        industry: industry,
        post_name: post_name,
        salary_type: salary_type,
    });
   };
}
