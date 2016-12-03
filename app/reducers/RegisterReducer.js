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
        case types.START_register_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_register_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}