import * as ActionTypes from '../actions/ActionTypes';

export default function base(state = {}, action) {
    switch (action.type) {
        case ActionTypes.SEARCH_PENDING:
        case ActionTypes.CREATE_ISSUE_PENDING:
        case ActionTypes.MY_ISSUES_PENDING:
            return {
                ...state,
                isRequesting: true,
                type: action.type,
                message: ''
            }
        case ActionTypes.SEARCH_FAILURE:
        case ActionTypes.MY_ISSUES_FAILURE:
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                message: action.message,
                results: {}
            }
        case ActionTypes.CREATE_ISSUE_SUCCESS:
        case ActionTypes.CREATE_ISSUE_FAILURE:
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                message: action.message
            }
        case ActionTypes.SEARCH_SUCCESS:
        case ActionTypes.MY_ISSUES_SUCCESS:
            return {
                ...state,
                type: action.type,
                isRequesting: false,
                message: action.message,
                results: action.results
            }
        default:
            return state;
    }
}