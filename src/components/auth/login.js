import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';
import { useSnackbar } from 'notistack';

import { Dialog, DialogContent, Box, Button, CircularProgress, Typography } from '@material-ui/core';
import useStyles from '../../styles/components/auth/signupStyles';

import { closeLoginModal } from '../../redux/actions/modal/modalActions';
import { loginUser } from '../../redux/actions/auth/authActions';


const Login = () => {

    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { loginModal } = useSelector(state => state.modal);

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = yup.object().shape({
        email: yup.string().lowercase().trim().email().required('Email must be valid'),
        password: yup.string().required('Password is required')
    });

    const onSubmit = (values, { setSubmitting }) => {
        dispatch(loginUser(values, enqueueSnackbar, setSubmitting));
    };

    const loginFields = [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            component: TextField,
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            component: TextField,
        },

    ];


    return (
        <Dialog open={loginModal} onClose={() => dispatch(closeLoginModal())} aria-labelledby="login-dialog" maxWidth="sm" className={classes.dialog}>
            <Typography className={classes.dialogTitle} variant="h3">
                Login
            </Typography>
            <DialogContent >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>
                            {loginFields.map(field => (
                                <Box margin={1} key={field.name} className={classes.fieldBox}>
                                    <Field
                                        component={field.component}
                                        label={field.label}
                                        name={field.name}
                                        type={field.type}
                                        variant="outlined"
                                        className={classes[field.name]}
                                    />
                                </Box>
                            ))}
                            <Box margin={1} className={classes.btnActions}>
                                <Button variant="outlined" onClick={() => dispatch(closeLoginModal())} className={classes.cancelBtn}>
                                    Cancel
                                </Button>
                                <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm} className={classes.submitBtn}>
                                    {isSubmitting ? <CircularProgress className={classes.loadingSpinner} /> : 'Submit'}
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default Login;
