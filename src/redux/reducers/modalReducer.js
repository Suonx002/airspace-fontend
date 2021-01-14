import * as types from '../actions/modal/modalTypes';

const initialState = {
    signupModal: false,
    loginModal: false
};


const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_SIGNUP_MODAL:
            return { ...state, signupModal: true };
        case types.CLOSE_SIGNUP_MODAL:
            return { ...state, signupModal: false };
        case types.SHOW_LOGIN_MODAL:
            return { ...state, loginModal: true };
        case types.CLOSE_LOGIN_MODAL:
            return { ...state, loginModal: false };
        default:
            return state;
    }
};


export default modalReducer;