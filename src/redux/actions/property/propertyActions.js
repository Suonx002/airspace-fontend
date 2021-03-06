import axios from 'axios';

import * as types from './propertyTypes';
import handleTokenError from '../../../utils/methods/handleTokenError';

import * as modalActions from '../modal/modalActions';

/***
 * PROPERTY ACTIONS
 ***/

export const getHomepageProperties = (enqueueSnackbar) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/properties/homepage`);

    dispatch({
      type: types.GET_HOMEPAGE_PROPERTIES,
      payload: res.data.data,
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);
  }
};

export const getAllProperties = (enqueueSnackbar) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/properties`);

    dispatch({
      type: types.CREATE_PROPERTY,
      payload: res.data.data,
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_ERROR,
      payload: 'Something went wrong with get all properties',
    });
  }
};

export const getSingleProperty = (propertyId, enqueueSnackbar) => async (
  dispatch
) => {
  try {
    const res = await axios.get(`/api/v1/properties/${propertyId}`);

    dispatch({
      type: types.GET_SINGLE_PROPERTY,
      payload: res.data.data,
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_ERROR,
      payload: 'Something went wrong with get a property',
    });
  }
};

export const createProperty = (data, enqueueSnackbar, setSubmitting) => async (
  dispatch
) => {
  try {
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const res = await axios.post(`/api/v1/properties`, formData, config);

    dispatch({
      type: types.CREATE_PROPERTY,
      payload: res.data.data,
    });

    dispatch(modalActions.closePropertyFormModal());

    enqueueSnackbar('Successfully created a new property!', {
      variant: 'success',
    });

    setSubmitting(false);
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_ERROR,
      payload: 'Something went wrong with creating a property',
    });

    enqueueSnackbar(
      err?.response?.data?.message ??
        'Something went wrong with creating a property!',
      {
        variant: 'error',
      }
    );
    setSubmitting(false);

    dispatch(modalActions.showPropertyFormModal());
  }
};

export const updateProperty = (
  data,
  propertyId,
  propertyUploadFile,
  enqueueSnackbar,
  setSubmitting
) => async (dispatch) => {
  try {
    const formData = new FormData();

    for (let key in data) {
      formData.append(key, data[key]);
    }

    if (propertyUploadFile) {
      formData.append('propertyImage', propertyUploadFile);
    }

    const res = await axios.patch(`/api/v1/properties/${propertyId}`, formData);

    dispatch({
      type: types.UPDATE_PROPERTY,
      payload: res.data.data,
    });

    setSubmitting(false);
    dispatch(modalActions.closePropertyFormModal());

    enqueueSnackbar('Successfully updated a property!', {
      variant: 'success',
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_ERROR,
      payload: 'Something went wrong with updating a property',
    });

    setSubmitting(false);
    dispatch(modalActions.showPropertyFormModal());

    enqueueSnackbar(
      err?.response?.data?.message ??
        'Something went wrong with updating a property!',
      {
        variant: 'error',
      }
    );
  }
};

export const deleteProperty = (propertyId, enqueueSnackbar) => async (
  dispatch
) => {
  try {
    await axios.delete(`/api/v1/properties/${propertyId}`);

    dispatch({
      type: types.DELETE_PROPERTY,
    });

    enqueueSnackbar('Successfully deleted a property!', {
      variant: 'success',
      payload: propertyId,
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_ERROR,
      payload: 'Something went wrong with deleting a property',
    });

    enqueueSnackbar(
      err?.response?.data?.message ??
        'Something went wrong with deleting a property!',
      {
        variant: 'error',
      }
    );
  }
};

export const getCurrentProperty = (data) => (dispatch) => {
  dispatch({
    type: types.GET_CURRENT_PROPERTY,
    payload: data,
  });
};

export const clearCurrentProperty = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_CURRENT_PROPERTY,
  });
};

export const clearPropertyError = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_PROPERTY_ERROR,
  });
};

/***
 * PROPERTY  REVIEW ACTIONS
 ***/

export const createPropertyReview = (
  propertyId,
  data,
  enqueueSnackbar,
  setSubmitting
) => async (dispatch) => {
  try {
    console.log({
      jwtToken: localStorage.jwtToken,
      header: axios.defaults.headers.common['Authorization'],
    });

    const res = await axios.post(
      `/api/v1/properties/${propertyId}/propertyReviews`,
      data
    );

    dispatch({
      type: types.CREATE_PROPERTY_REVIEW,
      payload: { propertyId, propertyReview: res.data.data },
    });

    setSubmitting(false);

    dispatch(modalActions.closePropertyReviewModal());

    enqueueSnackbar('Successfully created property review!', {
      variant: 'success',
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_REVIEW_ERROR,
      payload: 'Something went wrong with creating property review',
    });

    setSubmitting(false);
    dispatch(modalActions.showPropertyReviewModal());

    enqueueSnackbar(
      err?.response?.data?.message ??
        'Something went wrong with creating property review!',
      {
        variant: 'error',
      }
    );
  }
};

export const updatePropertyReview = (
  propertyId,
  propertyReviewId,
  data,
  enqueueSnackbar,
  setSubmitting
) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `/api/v1/properties/${propertyId}/propertyReviews/${propertyReviewId}`,
      data
    );

    dispatch({
      type: types.UPDATE_PROPERTY_REVIEW,
      payload: { propertyId, propertyReviewId, propertyReview: res.data.data },
    });

    setSubmitting(false);
    dispatch(modalActions.closePropertyReviewModal());

    enqueueSnackbar('Successfully updated property review!', {
      variant: 'success',
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_REVIEW_ERROR,
      payload: 'Something went wrong with updating property review',
    });

    setSubmitting(false);
    dispatch(modalActions.showPropertyReviewModal());

    enqueueSnackbar(
      err?.response?.data?.message ??
        'Something went wrong with updating property review!',
      {
        variant: 'error',
      }
    );
  }
};

export const deletePropertyReview = (
  propertyId,
  propertyReviewId,
  enqueueSnackbar
) => async (dispatch) => {
  try {
    await axios.delete(
      `/api/v1/properties/${propertyId}/propertyReviews/${propertyReviewId}`
    );

    dispatch({
      type: types.DELETE_PROPERTY_REVIEW,
      payload: { propertyReviewId },
    });

    enqueueSnackbar('Successfully deleted property review!', {
      variant: 'success',
    });
  } catch (err) {
    handleTokenError(err, enqueueSnackbar);

    dispatch({
      type: types.PROPERTY_REVIEW_ERROR,
      payload: 'Something went wrong with deleting property review',
    });

    enqueueSnackbar(
      err?.response?.data?.message ??
        'Something went wrong with deleting property review!',
      {
        variant: 'error',
      }
    );
  }
};

export const getCurrentPropertyReview = (data) => (dispatch) => {
  dispatch({
    type: types.GET_CURRENT_PROPERTY_REVIEW,
    payload: data,
  });
};

export const clearCurrentPropertyReview = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_CURRENT_PROPERTY_REVIEW,
  });
};

export const clearPropertyReviewError = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_PROPERTY_REVIEW_ERROR,
  });
};
