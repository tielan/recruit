import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
	personal_id	:''//,Int	个人id
}

export default function getPersoanResumeInfoById(state = initialState, action) {
    switch (action.type) {
        case types.START_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_getPersoanResumeInfoById_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}