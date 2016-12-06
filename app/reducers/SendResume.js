import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
	personal_id	:'',//	Int	用户id
	company_id:'',//		Int	公司id
	post_id	:'',//	Int	发布岗位信息Id
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case types.START_sendResume_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_sendResume_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}