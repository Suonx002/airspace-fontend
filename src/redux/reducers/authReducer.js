import * as auth from '../actions/auth/authTypes';


const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case auth.GET_AUTH_USER:
            return { ...state, isAuthenticated: true, user: action.payload, isLoading: false };
        case auth.LOGIN_SUCCESS:
        case auth.SIGNUP_SUCCESS:
            localStorage.setItem('jwtToken', action.payload.token);
            return { ...state, isAuthenticated: true, token: action.payload.token, isLoading: false };
        case auth.LOGOUT_USER:
            localStorage.removeItem('jwtToken');
            return { ...state, isAuthenticated: false, token: null, isLoading: false };
        case auth.AUTH_ERROR:
            localStorage.removeItem('jwtToken');
            return { ...state, isAuthenticated: false, token: null, error: action.payload, isLoading: false };
        default:
            return state;
    }
};

export default authReducer;