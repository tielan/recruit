import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
	company_id	:'',//	Int	公司id
	post_id	:'',//	Int	发布的岗位信息
	personal_id	:'',//	int	个人ID
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case types.START_getCompanyInviteInfo_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_getCompanyInviteInfo_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}