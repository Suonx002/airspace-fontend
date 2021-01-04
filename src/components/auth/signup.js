import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box, Button } from '@material-ui/core';
import useStyles from '../../styles/components/auth/signupStyles';

import { showSignupModal, closeSignupModal } from '../../redux/actions/modal/modalActions';

const Signup = () => {

    const classes = useStyles();
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
        username: yup.string().trim().min(3).required(),
        firstName: yup.string().trim().min(2).required(),
        lastName: yup.string().trim().min(2).required(),
        email: yup.string().trim().email().required(),
        password: yup.string().min(5).max(50).required()
    });

    const onSubmit = (values, other) => {
        console.log({
            values, other
        });
    };

    const signupFields = [
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text',
            component: TextField
        },
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'lastName',
            component: TextField
        },
        {
            label: 'Username',
            name: 'username',
            type: 'text',
            component: TextField
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            component: TextField
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            component: TextField
        },

    ];


    return (
        <Dialog open={signupModal} onClose={() => dispatch(closeSignupModal())} aria-labelledby="signup-dialog">
            <DialogTitle>Sign Up Form</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form>
                            {signupFields.map(field => (
                                <Box margin={1} key={field.name}>
                                    <Field
                                        component={field.component}
                                        label={field.label}
                                        name={field.name}
                                        type={field.type}
                                    />
                                </Box>
                            ))}
                            <Box margin={1}>
                                <Button variant="outlined" color="secondary" onClick={() => dispatch(closeSignupModal())}>
                                    Cancel
                                </Button>
                                <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
                                    Submit
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
