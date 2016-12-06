import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    user_name: '',
    user_password: '',
    data: undefined,
    errMsg: undefined,
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case types.START_personalLogin_ACTION:
            return Object.assign({}, state, {
                logining: true,
                errMsg: undefined,
                data: undefined,
            });
        case types.RECEIVE_personalLogin_ACTION:
            return Object.assign({}, state, {
                logining: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}