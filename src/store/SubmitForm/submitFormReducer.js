import {
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAILURE
} from './submitFormTypes'


const initialState = {
    loading: false,
    submitFormData: {},
    error: ""
}

const submitFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_FORM_REQUEST:
            return {
                ...state,
                loading: false
            }
        case SUBMIT_FORM_SUCCESS:
            return {
                loading: true,
                submitFormData: action.payload,
                error: ''
            }
        case SUBMIT_FORM_FAILURE:
            return {
                loading: false,
                submitFormData: {},
                error: action.payload
            }
        default:
            return state
    }
}


export default submitFormReducer