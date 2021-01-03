import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';


const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? composeWithDevTools({
        // Specify here name, actionsBlacklist, actionsCreators and other options
    })
    : compose;

// can add other middlewares [thunk , others]
const middlewares = [thunk];


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;