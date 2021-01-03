import * as auth from '../actions/auth/authTypes';


const initalState = {
    isAuthenticated: null,
    user: null,
    token: null,
    isLoading: true,
    error: null
};


export default (state = initalState, actions) => {
    switch (actions.type) {
        default:
            return state;
    }
};