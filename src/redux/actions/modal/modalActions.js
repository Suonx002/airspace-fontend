import * as types from './modalTypes';



export const showSignupModal = () => dispatch => {
    dispatch({
        type: types.SHOW_SIGNUP_MODAL
    });
};


export const closeSignupModal = () => dispatch => {
    dispatch({
        type: types.CLOSE_SIGNUP_MODAL
    });
};


export const showLoginModal = () => dispatch => {
    dispatch({
        type: types.SHOW_LOGIN_MODAL
    });
};


export const closeLoginModal = () => dispatch => {
    dispatch({
        type: types.CLOSE_LOGIN_MODAL
    });
};

export const showPropertyFormModal = () => dispatch => {
    dispatch({
        type: types.SHOW_PROPERTY_FORM_MODAL
    });
};
export const closePropertyFormModal = () => dispatch => {
    dispatch({
        type: types.CLOSE_PROPERTY_FORM_MODAL
    });
};