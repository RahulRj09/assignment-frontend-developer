import {
    SUB_CATEGORIES_REQUEST,
    SUB_CATEGORIES_SUCCESS,
    SUB_CATEGORIES_FAILURE
} from './subCategoriesTypes'


const initialState = {
    loading: false,
    subCategories: {},
    error: ""
}

const subCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUB_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: false
            }
        case SUB_CATEGORIES_SUCCESS:
            return {
                loading: true,
                subCategories: action.payload,
                error: ''
            }
        case SUB_CATEGORIES_FAILURE:
            return {
                loading: false,
                subCategories: {},
                error: action.payload
            }
        default:
            return state
    }
}



export default subCategoriesReducer