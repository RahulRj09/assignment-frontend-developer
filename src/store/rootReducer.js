import { combineReducers } from 'redux';
import loginReducer from './Login/loginReducer';
import categoriesReducer from './Categories/categoriesReducer'
import subCategoriesReducer from './SubCategories/subCategoriesReducer'
import topicsReducer from './Topics/topicsReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    topics: topicsReducer
})

export default rootReducer



