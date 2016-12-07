import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
	personal_id:'',//	int	个人ID
}

export default function getPersonSendResumeInfo(state = initialState, action) {
    switch (action.type) {
        case types.START_getPersonSendResumeInfo_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_getPersonSendResumeInfo_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}