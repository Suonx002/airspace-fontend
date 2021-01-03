import React from 'react';

import { useSnackbar } from 'notistack';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { isAuthenticated, user } = useSelector(state => state.auth);
    const { enqueueSnackbar } = useSnackbar();

    return <Route
        {...rest}
        render={props => {
            const permissionAccess = ['user', 'host', 'admin'];

            if (isAuthenticated && user && permissionAccess.includes(user.role)) {
                return <Component {...props} />;

            }

            enqueueSnackbar("Please login to access this page!", {
                variant: 'error'
            });
            return <Redirect path="/login" />;

        }}

    />;

};


export default PrivateRoute;