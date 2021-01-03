import * as modal from './modalTypes';



export const showSignupModal = () => dispatch => {
    dispatch({
        type: modal.SHOW_SIGNUP_MODAL
    });
};


export const closeSignupModal = () => dispatch => {
    dispatch({
        type: modal.CLOSE_SIGNUP_MODAL
    });
};


export const showLoginModal = () => dispatch => {
    dispatch({
        type: modal.SHOW_LOGIN_MODAL
    });
};


export const closeLoginModal = () => dispatch => {
    dispatch({
        type: modal.CLOSE_LOGIN_MODAL
    });
};