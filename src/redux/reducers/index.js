import { combineReducers } from 'redux';

import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import modalReducer from './modalReducer';
import imageFileReducer from './imageFileReducer';

const allReducers = combineReducers({
    auth: authReducer,
    property: propertyReducer,
    modal: modalReducer,
    imageFile: imageFileReducer
});

export default allReducers;