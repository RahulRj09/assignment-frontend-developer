import { combineReducers } from 'redux';
import loginReducer from './Login/loginReducer';

const rootReducer = combineReducers({
    login: loginReducer
})

export default rootReducer



