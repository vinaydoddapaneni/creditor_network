import * as ActionTypes from './ActionTypes'
import * as ComplaintService from '../services/complaint';

export const search = (keyword) => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.SEARCH_PENDING })
        ComplaintService.search(keyword)
            .then((response) => {
                dispatch({ type: ActionTypes.SEARCH_SUCCESS, results: response.data.complaints, message: response.message })
            })
            .catch((response) => {
                dispatch({ type: ActionTypes.SIGN_UP_FAIL, message: response.message })
            })
    }
}

export const create = (name, phone, amount, identificationType, identificationNo, email, address, date_from, date_to, city, fileupload, description, complaintType, createdBy, createdDate) => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.CREATE_ISSUE_PENDING })
        ComplaintService.create(name, phone, amount, identificationType, identificationNo, email, address, date_from, date_to, city, fileupload, description, complaintType, createdBy, createdDate)
            .then((response) => {
                dispatch({ type: ActionTypes.CREATE_ISSUE_SUCCESS, message: response.message })
            })
            .catch((response) => {
                dispatch({ type: ActionTypes.CREATE_ISSUE_FAILURE, message: response.message })
            })
    }
}

export const myIssues = (id) => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.MY_ISSUES_PENDING })
        ComplaintService.myIssues(id)
            .then((response) => {
                dispatch({ type: ActionTypes.MY_ISSUES_SUCCESS, message: response.message, results: response.data.complaints })
            })
            .catch((response) => {
                dispatch({ type: ActionTypes.MY_ISSUES_FAILURE, message: response.message })
            })
    }
}