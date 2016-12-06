import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
	personal_id	:'',//,Int	个人id
    work_type		:'',//,Istring	工作类型（1:全职，2:兼职，3:实习）
	addr_area		:'',//,Istring	地区
	industry		:'',//,Istring	行业
	post_name		:'',//,Istring	岗位名称
	salary_type		:'',//,Istring	薪资
	hot_recommend		:'',//,Istring	热门岗位推荐（1：是，0否）
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case types.START_getCompanyByParam_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_getCompanyByParam_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}