import {
    TOPICS_REQUEST,
    TOPICS_SUCCESS,
    TOPICS_FAILURE
} from './topicsTypes'


const initialState = {
    loading: false,
    topics: {},
    error: ""
}

const topicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOPICS_REQUEST:
            return {
                ...state,
                loading: false
            }
        case TOPICS_SUCCESS:
            return {
                loading: true,
                topics: action.payload,
                error: ''
            }
        case TOPICS_FAILURE:
            return {
                loading: false,
                topics: {},
                error: action.payload
            }
        default:
            return state
    }
}


export default topicsReducer