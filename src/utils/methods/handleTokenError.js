const handleTokenError = (err, enqueueSnackbar) => {

    if (err.response && err.response.data && err.response.data.message && err.response.data.message.includes('token')) {
        enqueueSnackbar(err.response.data.message || 'Please login again', {
            variant: 'error'
        });

        //remove token & push user to homepage
        localStorage.removeItem('jwtToken');

        window.history.pushState({}, null, '/');

    }
};

export default handleTokenError;