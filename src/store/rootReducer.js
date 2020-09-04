import { combineReducers } from 'redux';
import loginReducer from './UserManagement/Login/loginReducer';

const rootReducer = combineReducers({
    login: loginReducer
})

export default rootReducer



