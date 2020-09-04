import {
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAILURE
} from './submitFormTypes'
import axios from 'axios';

const submitFormRequest = () => {
    return {
        type: SUBMIT_FORM_REQUEST
    }
}

const submitFormSuccess = (data) => {
    return {
        type: SUBMIT_FORM_SUCCESS,
        payload: data
    }
}

const submitFormFaliure = (error) => {
    return {
        type: SUBMIT_FORM_FAILURE,
        payload: error
    }
}

const submitForm = (payload, token) => {
    console.log(payload)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return (dispatch) => {
        dispatch(submitFormRequest())
        let url = `http://18.220.240.163:8080/rest/admin/matches`
        axios.post(url, payload, config).then(response => {
            dispatch(submitFormSuccess(response.data))
        }).catch(err => {
            console.log(err.message)
            dispatch(submitFormFaliure(err.message))
        })
    }
}

export { submitForm } 