import * as types from './imageFileTypes';

export const setPropertyFileUpload = (file) => dispatch => {
    dispatch({
        type: types.SET_PROPERTY_FILE_UPLOAD,
        payload: file
    });
};
export const unsetPropertyFileUpload = () => dispatch => {
    dispatch({
        type: types.SET_PROPERTY_FILE_UPLOAD
    });
};