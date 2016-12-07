import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
	company_id	:'',//	Int	公司id
	post_id	:'',//	Int	发布的岗位信息
}

export default function getCompanyInfo(state = initialState, action) {
    switch (action.type) {
        case types.START_getCompanyInfo_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_getCompanyInfo_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}