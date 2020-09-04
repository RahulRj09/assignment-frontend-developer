import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginTypes'
import axios from 'axios';

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const loginSuccess = (userData) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userData
    }
}

const loginFaliure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

const login = (loginDetails) => {
    return (dispatch) => {
        dispatch(loginRequest())
        let url = `http://18.220.240.163:8080/rest/authenticate/login`
        return axios.post(url, loginDetails).then(response => {
            dispatch(loginSuccess(response.data))
            console.log(response.data)
            return { status: true, data: response.data }
        }).catch(err => {
            dispatch(loginFaliure(err.message))
            return { status: false }
        })
    }
}

export { login } 
