import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';
import { useSnackbar } from 'notistack';

import { Dialog, DialogContent, Box, Button, CircularProgress, Typography, Slide } from '@material-ui/core';
import useStyles from '../../styles/components/auth/signupStyles';

import { closeSignupModal, showLoginModal } from '../../redux/actions/modal/modalActions';
import { signupUser } from '../../redux/actions/auth/authActions';


import TravelerIcon from '../../assets/traveler.svg';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Signup = () => {

    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { signupModal } = useSelector(state => state.modal);

    const initialValues = {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    };

    const validationSchema = yup.object().shape({
        username: yup.string().trim().min(3).required('Username must be at least 3 characters long'),
        firstName: yup.string().trim().min(2).required('First name must be at least 2 characters long'),
        lastName: yup.string().trim().min(2).required('Last name must be at least 2 characters long'),
        email: yup.string().trim().email().required('Email must be valid'),
        password: yup.string().min(5).max(50).required('Password must be between 5 to 50 characters')
    });

    const onSubmit = (values, { setSubmitting }) => {
        dispatch(signupUser(values, enqueueSnackbar, setSubmitting));
    };

    const signupFields = [
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text',
            component: TextField,
        },
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'lastName',
            component: TextField,
        },
        {
            label: 'Username',
            name: 'username',
            type: 'text',
            component: TextField,
        },
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
        <Dialog
            TransitionComponent={Transition}
            open={signupModal}
            onClose={() => dispatch(closeSignupModal())}
            aria-labelledby="signup-dialog"
            maxWidth="sm"
            className={classes.dialog}>
            {/* make styles doesn't work, will have to inline styles */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }} >
                <img
                    src={TravelerIcon}
                    alt="traverler" style={{
                        maxWidth: '50%',
                        maxHeight: 200
                    }} />
            </div>
            <Typography className={classes.dialogTitle} variant="h3">
                Sign Up
            </Typography>
            <DialogContent >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>
                            {signupFields.map(field => (
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
                            <Box margin={2} className={classes.haveAccount}>
                                <Typography variant="body1" className={classes.haveAccountText}>
                                    Already have an account? <Button
                                        className={classes.haveAccountBtn}
                                        onClick={() => {

                                            dispatch(closeSignupModal());
                                            dispatch(showLoginModal());

                                        }}
                                    >click here</Button>
                                </Typography>
                            </Box>
                            <Box margin={1} className={classes.btnActions}>
                                <Button variant="outlined" onClick={() => dispatch(closeSignupModal())} className={classes.cancelBtn}>
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

export default Signup;
