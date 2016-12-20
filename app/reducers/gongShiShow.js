import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: {},
    errMsg: undefined,
}

export default function gongShiShow(state = initialState, action) {
    switch (action.type) {
        case types.START_gongShiShow_ACTION:
            return Object.assign({}, state, {
                loading: true,
                errMsg: undefined,
                data: {},
            });
        case types.SUCCESS_gongShiShow_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
            });
        case types.ERROR_gongShiShow_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: {},
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}