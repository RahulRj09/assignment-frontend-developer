import {
    SUB_CATEGORIES_REQUEST,
    SUB_CATEGORIES_SUCCESS,
    SUB_CATEGORIES_FAILURE
} from './subCategoriesTypes'
import axios from 'axios';

const subCategoriesRequest = () => {
    return {
        type: SUB_CATEGORIES_REQUEST
    }
}

const subCategoriesSuccess = (data) => {
    return {
        type: SUB_CATEGORIES_SUCCESS,
        payload: data
    }
}

const subCategoriesFaliure = (error) => {
    return {
        type: SUB_CATEGORIES_FAILURE,
        payload: error
    }
}

const getSubCategories = (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return (dispatch) => {
        dispatch(subCategoriesRequest())
        let url = `http://18.220.240.163:8080/rest/admin/subcategories`
        axios.get(url, config).then(response => {
            let data = {
                success: response.data.success,
                result: response.data.result.list
            }
            dispatch(subCategoriesSuccess(data))
        }).catch(err => {
            dispatch(subCategoriesFaliure(err.message))
        })
    }
}

export { getSubCategories } 