import * as auth from '../actions/auth/authTypes';


const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
    error: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};