import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { isAuthenticated, user } = useSelector(state => state.auth);
    const { enqueueSnackbar } = useSnackbar();

    return <Route
        {...rest}
        render={props => {
            if (isAuthenticated && user && user.role.includes(['admin', 'host'])) {
                return <Component {...props} />;
            }

            enqueueSnackbar('You do not have permission to access for this route!', {
                variant: 'error'
            });

            return <Redirect path="/" />;

        }}

    />;

};


export default PrivateRoute;