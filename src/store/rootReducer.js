import { combineReducers } from 'redux';
import loginReducer from './Login/loginReducer';
import categoriesReducer from './Categories/categoriesReducer'
import subCategoriesReducer from './SubCategories/subCategoriesReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    categories: categoriesReducer,
    subCategories: subCategoriesReducer
})

export default rootReducer



