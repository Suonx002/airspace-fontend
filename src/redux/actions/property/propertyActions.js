import axios from 'axios';

import * as types from './propertyTypes';
import handleTokenError from '../../../utils/methods/handleTokenError';


import * as modalActions from '../modal/modalActions';

export const getHomepageProperties = (enqueueSnackbar) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/properties/homepage`);

        dispatch({
            type: types.GET_HOMEPAGE_PROPERTIES,
            payload: res.data.data
        });
    } catch (err) {
        handleTokenError(err, enqueueSnackbar);
    }
};


export const getAllProperties = (enqueueSnackbar) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/properties`);

        dispatch({
            type: types.CREATE_PROPERTY,
            payload: res.data.data
        });



    } catch (err) {
        handleTokenError(err, enqueueSnackbar);

        dispatch({
            type: types.PROPERTY_ERROR,
            payload: 'Something went wrong with creating a property'
        });
    }
};

export const getSingleProperty = (propertyId, enqueueSnackbar) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/properties/${propertyId}`);

        dispatch({
            type: types.GET_SINGLE_PROPERTY,
            payload: res.data.data
        });



    } catch (err) {
        handleTokenError(err, enqueueSnackbar);

        dispatch({
            type: types.PROPERTY_ERROR,
            payload: 'Something went wrong with creating a property'
        });
    }
};



export const createProperty = (data, enqueueSnackbar, setSubmitting) => async dispatch => {
    try {
        const formData = new FormData();

        for (let key in data) {
            formData.append(key, data[key]);
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const res = await axios.post(`/api/v1/properties`, formData, config);

        dispatch({
            type: types.CREATE_PROPERTY,
            payload: res.data.data
        });

        dispatch(modalActions.closePropertyFormModal());

        enqueueSnackbar('Successfully created a new property!', {
            variant: 'success'
        });

        setSubmitting(false);

    } catch (err) {
        handleTokenError(err, enqueueSnackbar);

        dispatch({
            type: types.PROPERTY_ERROR,
            payload: 'Something went wrong with creating a property'
        });

        enqueueSnackbar('Something went wrong with creating a property!', {
            variant: 'error'
        });
        setSubmitting(false);

        dispatch(modalActions.showPropertyFormModal());



    }
};

export const updateProperty = (data, enqueueSnackbar) => async dispatch => {
    try {
        const res = await axios.patch(`/api/v1/properties/${data.propertyId}`, data);

        dispatch({
            type: types.UPDATE_PROPERTY,
            payload: res.data.data
        });

        enqueueSnackbar('Successfully updated a property!', {
            variant: 'success'
        });

    } catch (err) {
        handleTokenError(err, enqueueSnackbar);

        dispatch({
            type: types.PROPERTY_ERROR,
            payload: 'Something went wrong with updating a property'
        });

        enqueueSnackbar('Something went wrong with updating a property!', {
            variant: 'error'
        });

    }
};


export const deleteProperty = (propertyId, enqueueSnackbar) => async dispatch => {
    try {
        await axios.delete(`/api/v1/properties/${propertyId}`);

        dispatch({
            type: types.DELETE_PROPERTY,
        });

        enqueueSnackbar('Successfully deleted a property!', {
            variant: 'success',
            payload: propertyId
        });

    } catch (err) {
        handleTokenError(err, enqueueSnackbar);

        dispatch({
            type: types.PROPERTY_ERROR,
            payload: 'Something went wrong with deleting a property'
        });

        enqueueSnackbar('Something went wrong with deleting a property!', {
            variant: 'error'
        });
    }
};

export const getCurrentProperty = data => dispatch => {
    dispatch({
        type: types.GET_CURRENT_PROPERTY,
        payload: data
    });
};

export const clearCurrentProperty = () => dispatch => {
    dispatch({
        type: types.CLEAR_CURRENT_PROPERTY,
    });
};

export const clearPropertyError = () => dispatch => {
    dispatch({
        type: types.CLEAR_PROPERTY_ERROR,
    });
};

