import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: undefined,
    errMsg: undefined,
    user_name: '',//	手机号码
    disability_code: '',//	残疾证编号
    user_password: '',//	新密码
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case types.START_personalForgetPassWord_ACTION:
            return Object.assign({}, state, {
                loading: true,
                data: undefined,
                errMsg: undefined,
            });
        case types.RECEIVE_personalForgetPassWord_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}