import * as ActionTypes from './ActionTypes'
import * as AuthService from '../services/auth';

export const signUp = (name, mobile, email, password) => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.SIGN_UP_PENDING })
        AuthService.signUp(name, mobile, email, password)
            .then((response) => {
                dispatch({ type: ActionTypes.SIGN_UP_SUCCESS, message: response.message })
            })
            .catch((response) => {
                dispatch({ type: ActionTypes.SIGN_UP_FAIL, message: response.message })
            })
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.SIGN_OUT });
    }
}

export const signIn = (email, password) => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.SIGN_IN_PENDING })
        AuthService.signIn(email, password)
            .then((response) => {
                dispatch({ type: ActionTypes.SIGN_IN_SUCCESS, userData: response.data.user, message: response.message, token: response.data.token })
            })
            .catch((response) => {
                dispatch({ type: ActionTypes.SIGN_IN_FAIL, message: response.message })
            })
    }
}