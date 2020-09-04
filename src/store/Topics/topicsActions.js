import {
    TOPICS_REQUEST,
    TOPICS_SUCCESS,
    TOPICS_FAILURE
} from './topicsTypes'
import axios from 'axios';

const topicsRequest = () => {
    return {
        type: TOPICS_REQUEST
    }
}

const topicsSuccess = (data) => {
    return {
        type: TOPICS_SUCCESS,
        payload: data
    }
}

const topicsFaliure = (error) => {
    return {
        type: TOPICS_FAILURE,
        payload: error
    }
}

const getTopics = (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return (dispatch) => {
        dispatch(topicsRequest())
        let url = `http://18.220.240.163:8080/rest/admin/topics`
        axios.get(url, config).then(response => {
            let data = {
                success: response.data.success,
                result: response.data.result.list
            }
            dispatch(topicsSuccess(data))
        }).catch(err => {
            dispatch(topicsFaliure(err.message))
        })
    }
}

export { getTopics } 