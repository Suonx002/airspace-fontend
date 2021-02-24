import * as types from './modalTypes';

export const showSignupModal = () => (dispatch) => {
  dispatch({
    type: types.SHOW_SIGNUP_MODAL,
  });
};

export const closeSignupModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_SIGNUP_MODAL,
  });
};

export const showLoginModal = () => (dispatch) => {
  dispatch({
    type: types.SHOW_LOGIN_MODAL,
  });
};

export const closeLoginModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_LOGIN_MODAL,
  });
};

export const showPropertyFormModal = () => (dispatch) => {
  dispatch({
    type: types.SHOW_PROPERTY_FORM_MODAL,
  });
};
export const closePropertyFormModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_PROPERTY_FORM_MODAL,
  });
};

export const showPropertyDropzone = () => (dispatch) => {
  dispatch({
    type: types.SHOW_PROPERTY_DROPZONE_MODAL,
  });
};

export const closePropertyDropzone = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_PROPERTY_DROPZONE_MODAL,
  });
};

export const showPropertyReviewModal = () => (dispatch) => {
  dispatch({
    type: types.SHOW_PROPERTY_REVIEW_MODAL,
  });
};

export const closePropertyReviewModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_PROPERTY_REVIEW_MODAL,
  });
};

export const showBecomeHostModal = () => (dispatch) => {
  dispatch({
    type: types.SHOW_BECOME_HOST_MODAL,
  });
};

export const closeBecomeHostModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_BECOME_HOST_MODAL,
  });
};
