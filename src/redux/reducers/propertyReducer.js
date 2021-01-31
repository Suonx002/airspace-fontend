import * as types from '../actions/property/propertyTypes';


const initialState = {
    homepageProperties: {},
    allProperties: [],
    property: null,
    currentProperty: null,
    isLoading: true,
    error: null
};

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        // START PROPERTY ACTIONS
        case types.GET_HOMEPAGE_PROPERTIES:
            return { ...state, homepageProperties: action.payload, isLoading: false, error: null };
        case types.GET_ALL_PROPERTIES:
            return { ...state, allProperties: action.payload, isLoading: false, error: null };
        case types.GET_SINGLE_PROPERTY:
            return { ...state, property: action.payload, isLoading: false, error: null };
        case types.GET_CURRENT_PROPERTY:
            return { ...state, currentProperty: action.payload, isLoading: false, error: null };
        case types.CREATE_PROPERTY:
            return { ...state, allProperties: [action.payload, ...state.allProperties], isLoading: false, error: null };
        case types.UPDATE_PROPERTY:
            return { ...state, allProperties: state.allProperties.map(property => property.propertyId === action.payload.propertyId ? action.payload : property), isLoading: false, error: null };
        case types.DELETE_PROPERTY:
            return { ...state, allProperties: state.allProperties.filter(property => property.propertyId !== action.payload), isLoading: false, error: null };
        case types.CLEAR_CURRENT_PROPERTY:
            return { ...state, currentProperty: null, isLoading: false, error: null };
        case types.PROPERTY_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        // START PROPERTY REVIEW ACTIONS
        case types.CREATE_PROPERTY_REVIEW:
            return {
                ...state,
                isLoading: false,
                error: null,
                property: { ...state.property, propertyReviews: [action.payload.propertyReview, ...state.property.propertyReviews] }
            };
        case types.UPDATE_PROPERTY_REVIEW:
            return {
                ...state,
                isLoading: false,
                error: null,
                property: {
                    ...state.property,
                    propertyReviews: state.property.propertyReviews.map(review => review.id === action.payload.propertyReviewId ? action.payload.propertyReview : review)
                }

            };

        case types.DELETE_PROPERTY_REVIEW:
            return {
                ...state,
                isLoading: false,
                error: null,
                property: {
                    ...state.property,
                    propertyReviews: state.property.propertyReviews.filter(review => review.id !== action.payload.propertyReviewId)
                }

            };

        default:
            return state;
    }
};

export default propertyReducer;