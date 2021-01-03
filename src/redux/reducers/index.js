import { combineReducers } from 'redux';

import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import modalReducer from './modalReducer';

const allReducers = combineReducers({
    auth: authReducer,
    property: propertyReducer,
    modal: modalReducer
});

export default allReducers;