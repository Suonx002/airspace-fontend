import * as property from '../actions/property/propertyTypes';


const initalState = {
    property: null,
    allProperties: [],
    currentProperty: null,
    isLoading: true,
    error: null
};

export default (state = initalState, actions) => {
    switch (actions.type) {
        default:
            return state;
    }
};