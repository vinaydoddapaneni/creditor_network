import * as ActionTypes from '../actions/ActionTypes';

export default function base(state = {}, action) {
    switch (action.type) {
        case ActionTypes.SIGN_IN_PENDING:
        case ActionTypes.SIGN_UP_PENDING:
            return {
                ...state,
                isRequesting: true,
                type: action.type,
                message: ''
            }
        case ActionTypes.SIGN_IN_FAIL:
        case ActionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                message: action.message
            }
        case ActionTypes.SIGN_OUT:
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                message: '',
                token: '',
                userData: ''
            }
        case ActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                message: action.message,
                token: action.token,
                userData: action.userData
            }
        case ActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                message: action.message,
            }
        default:
            return state;
    }
}