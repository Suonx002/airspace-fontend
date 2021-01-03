import * as modal from '../actions/modal/modalTypes';

const initialState = {
    signupModal: false,
    loginModal: false
};


const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case modal.SHOW_SIGNUP_MODAL:
            return { ...state, signupModal: true };
        case modal.CLOSE_SIGNUP_MODAL:
            return { ...state, signupModal: false };
        case modal.SHOW_LOGIN_MODAL:
            return { ...state, loginModal: true };
        case modal.CLOSE_LOGIN_MODAL:
            return { ...state, loginModal: false };
        default:
            return state;
    }
};


export default modalReducer;