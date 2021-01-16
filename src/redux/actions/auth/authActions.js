import axios from 'axios';
import * as types from './authTypes';

import setAuthToken from '../../../utils/setAuthToken';
import { closeLoginModal, closeSignupModal } from '../modal/modalActions';

import handleTokenError from '../../../utils/methods/handleTokenError';


export const getAuthUser = (enqueueSnackbar) => async dispatch => {
    try {
        setAuthToken(localStorage.jwtToken);
        const res = await axios.get('/api/v1/users/me');

        dispatch({
            type: types.GET_AUTH_USER,
            payload: res.data.data
        });

    } catch (err) {

        handleTokenError(err, enqueueSnackbar);
        dispatch({
            type: types.AUTH_ERROR,
        });
    }
};

export const signupUser = (data, enqueueSnackbar, setSubmitting) => async dispatch => {
    try {
        const res = await axios.post('/api/v1/auth/signup', data);

        dispatch({
            type: types.SIGNUP_SUCCESS,
            payload: res.data
        });

        setSubmitting(false);
        dispatch(closeLoginModal());
        enqueueSnackbar('Successfully register an account!', {
            variant: 'success'
        });

    } catch (err) {

        handleTokenError(err, enqueueSnackbar);

        dispatch({
            type: types.AUTH_ERROR,
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

        console.log({ res });

        dispatch({
            type: types.LOGIN_SUCCESS,
            payload: res.data
        });

        setSubmitting(false);
        dispatch(closeLoginModal());
        enqueueSnackbar('Successfully login!', {
            variant: 'success'
        });

    } catch (err) {

        console.log({ err });
        handleTokenError(err, enqueueSnackbar);
        dispatch({
            type: types.AUTH_ERROR,

        });

        setSubmitting(false);
        enqueueSnackbar('Invalid credentials!', {
            variant: 'error'
        });
    }
};


export const logoutUser = (enqueueSnackbar) => dispatch => {
    dispatch({
        type: types.LOGOUT_USER
    });
    enqueueSnackbar('Successfully logout!', {
        variant: 'success'
    });
};



export const clearAuthError = () => dispatch => {
    dispatch({
        type: types.CLEAR_AUTH_ERROR
    });
};