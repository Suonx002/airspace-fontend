import * as types from '../actions/modal/modalTypes';

const initialState = {
  signupModal: false,
  loginModal: false,
  propertyFormModal: false,
  propertyDropzoneModal: false,
  propertyReviewFormModal: false,
  becomeHostModal: false,
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
    case types.SHOW_BECOME_HOST_MODAL:
      return { ...state, becomeHostModal: true };
    case types.CLOSE_BECOME_HOST_MODAL:
      return { ...state, becomeHostModal: false };
    case types.SHOW_PROPERTY_FORM_MODAL:
      return { ...state, propertyFormModal: true };
    case types.CLOSE_PROPERTY_FORM_MODAL:
      return { ...state, propertyFormModal: false };
    case types.SHOW_PROPERTY_DROPZONE_MODAL:
      return { ...state, propertyDropzoneModal: true };
    case types.CLOSE_PROPERTY_DROPZONE_MODAL:
      return { ...state, propertyDropzoneModal: false };
    case types.SHOW_PROPERTY_REVIEW_MODAL:
      return { ...state, propertyReviewFormModal: true };
    case types.CLOSE_PROPERTY_REVIEW_MODAL:
      return { ...state, propertyReviewFormModal: false };
    default:
      return state;
  }
};

export default modalReducer;
