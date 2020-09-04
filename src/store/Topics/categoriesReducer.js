import {
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS,
    CATEGORIES_FAILURE
} from './categoriesTypes'


const initialState = {
    loading: false,
    categories: {},
    error: ""
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                loading: false
            }
        case CATEGORIES_SUCCESS:
            return {
                loading: true,
                categories: action.payload,
                error: ''
            }
        case CATEGORIES_FAILURE:
            return {
                loading: false,
                categories: {},
                error: action.payload
            }
        default:
            return state
    }
}



export default categoriesReducer