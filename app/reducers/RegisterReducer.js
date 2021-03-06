import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    user_name: '',
    user_password: '',
    disability_code: '',
    data: undefined,
    errMsg: undefined,
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case types.START_personalRegist_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_personalRegist_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}