import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    isFetched:false,
    result: undefined,
    errMsg: undefined,
}

export default function SendResume(state = initialState, action) {
    state = Object.assign({},state,{
        isFetched:false,
    });
    switch (action.type) {
        case types.START_sendResume_ACTION:
            return Object.assign({}, state, {
                loading: true,
                isFetched:true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_sendResume_ACTION:
            return Object.assign({}, state, {
                loading: false,
                isFetched:true,
                result: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}