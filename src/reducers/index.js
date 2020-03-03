import { combineReducers } from 'redux';
import authReducers from './auth';
import complaintReducers from './complaint';

const reducers = combineReducers({
    authReducers,
    complaintReducers
});

export default reducers;