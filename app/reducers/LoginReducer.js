import * as types from '../actions/ActionTypes';

const initialState = {
    logining : false,
    
    data:''
}

export default function login(state = initialState, action){
    switch (action.type) {
        case types.START_LOGIN_ACTION:
                  return Object.assign({}, state, {
                      logining: true
                  });
        case types.RECEIVE_LOGIN_ACTION:
                  return Object.assign({}, state, {
                       logining: false,
                       data: action.result
                  });
        default:
            return state;
    }
}