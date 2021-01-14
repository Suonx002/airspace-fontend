import * as types from '../actions/auth/authTypes';


const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_AUTH_USER:
            return { ...state, isAuthenticated: true, user: action.payload, isLoading: false };
        case types.LOGIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
            localStorage.setItem('jwtToken', action.payload.token);
            return { ...state, isAuthenticated: true, user: action.payload.data, token: action.payload.token, isLoading: false };
        case types.LOGOUT_USER:
            localStorage.removeItem('jwtToken');
            return { ...state, isAuthenticated: false, token: null, isLoading: false };
        case types.AUTH_ERROR:
            localStorage.removeItem('jwtToken');
            return { ...state, isAuthenticated: false, token: null, error: action.payload, isLoading: false };
        default:
            return state;
    }
};

export default authReducer;