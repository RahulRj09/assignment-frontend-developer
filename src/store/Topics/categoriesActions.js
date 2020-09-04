import {
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS,
    CATEGORIES_FAILURE
} from './categoriesTypes'
import axios from 'axios';

const categoriesRequest = () => {
    return {
        type: CATEGORIES_REQUEST
    }
}

const categoriesSuccess = (data) => {
    return {
        type: CATEGORIES_SUCCESS,
        payload: data
    }
}

const categoriesFaliure = (error) => {
    return {
        type: CATEGORIES_FAILURE,
        payload: error
    }
}

const getCategories = (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return (dispatch) => {
        dispatch(categoriesRequest())
        let url = `http://18.220.240.163:8080/rest/admin/categories`
        axios.get(url, config).then(response => {
            let data = {
                success: response.data.success,
                result: response.data.result.list
            }
            dispatch(categoriesSuccess(data))
        }).catch(err => {
            dispatch(categoriesFaliure(err.message))
        })
    }
}

export { getCategories } 