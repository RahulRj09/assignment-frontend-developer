import { combineReducers } from 'redux';
import loginReducer from './Login/loginReducer';
import categoriesReducer from './Categories/categoriesReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    categories: categoriesReducer
})

export default rootReducer



