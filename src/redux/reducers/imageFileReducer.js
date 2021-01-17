import * as types from '../actions/imageFile/imageFileTypes';


const initialState = {
    propertyUploadFile: ''
};

const imageFileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PROPERTY_FILE_UPLOAD:
            return { ...state, propertyUploadFile: action.payload };
        case types.UNSET_PROPERTY_FILE_UPLOAD:
            return { ...state, propertyUploadFile: '' };
        default:
            return state;
    }
};


export default imageFileReducer;