import * as property from '../actions/property/propertyTypes';


const initialState = {
    property: null,
    allProperties: [],
    currentProperty: null,
    isLoading: true,
    error: null
};

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default propertyReducer;