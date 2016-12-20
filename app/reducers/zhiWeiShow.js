import * as types from '../actions/ActionTypes';

const initialState = {
    loading: false,
    data: {},
    errMsg: undefined,
}

export default function zhiWeiShow(state = initialState, action) {
    switch (action.type) {
        case types.START_zhiWeiShow_ACTION:
            return Object.assign({}, state, {
                loading: true,
                errMsg: undefined,
                data: {},
            });
        case types.SUCCESS_zhiWeiShow_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result,
            });
        case types.ERROR_zhiWeiShow_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: {},
                errMsg: action.errMsg,
            });
        default:
            return state;
    }
}