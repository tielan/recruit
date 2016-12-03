import {combineReducers} from 'redux';

import login from './LoginReducer';
import register from './RegisterReducer';

const rootReducer = combineReducers({
      register,login
});

export default rootReducer;