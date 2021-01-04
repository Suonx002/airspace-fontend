import axios from 'axios';
import * as auth from './authTypes';

import setAuthToken from '../../../utils/setAuthToken';


export const getAuthUser = () => async dispatch => {
    try {
        setAuthToken(localStorage.jwtToken);
        const res = await axios.get('/api/v1/users/me');

        dispatch({
            type: auth.GET_AUTH_USER,
            payload: res.data.data
        });

    } catch (err) {
        dispatch({
            type: auth.AUTH_ERROR
        });
    }
};

export const signupUser = (data, enqueueSnackbar, setSubmitting) => async dispatch => {
    try {
        const res = await axios.post('/api/v1/auth/signup', data);

        dispatch({
            type: auth.SIGNUP_SUCCESS,
            payload: res.data
        });

        setSubmitting(false);
        enqueueSnackbar('Successfully register an account!', {
            variant: 'success'
        });

    } catch (err) {
        dispatch({
            type: auth.AUTH_ERROR,
        });

        setSubmitting(false);
        enqueueSnackbar('Something went wrong with sign up', {
            variant: 'error'
        });
    }
};

export const loginUser = (data, enqueueSnackbar, setSubmitting) => async dispatch => {
    try {
        const res = await axios.post('/api/v1/auth/login', data);

        dispatch({
            type: auth.LOGIN_SUCCESS,
            payload: res.data
        });

        setSubmitting(false);
        enqueueSnackbar('Successfully login!', {
            variant: 'success'
        });

    } catch (err) {

        console.log({ error: err.response });
        dispatch({
            type: auth.AUTH_ERROR,
            payload: err.response
        });

        setSubmitting(false);
        enqueueSnackbar('Invalid credentials!', {
            variant: 'error'
        });
    }
};




export const clearAuthError = () => dispatch => {
    dispatch({
        type: auth.CLEAR_AUTH_ERROR
    });
};