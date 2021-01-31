import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';

import { Dialog, DialogTitle, DialogContent, Box, CircularProgress, Button, Slide } from '@material-ui/core';

import * as modalActions from '../../redux/actions/modal/modalActions';

import useStyles from '../../styles/components/property/propertyReviewFormDialogStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PropertyReviewFormDialog = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const { modal: { propertyReviewFormModal } } = useSelector(state => state);


    const initialValues = {
        title: '',
        comment: '',
        rating: ''
    };

    const propertyReviewSchema = yup.object().shape({
        title: yup.string().trim().min(3).required(),
        comment: yup.string().trim().min(5).required(),
        rating: yup.number().oneOf([1, 2, 3, 4, 5]).required()
    });

    const propertyReviewFields = [
        {
            label: 'Title',
            name: 'title',
            type: 'text',
            component: TextField,
            variant: 'outlined'
        },
        {
            label: 'Rating',
            name: 'rating',
            type: 'number',
            component: TextField,
            variant: 'outlined'
        },
        {
            label: 'Comment',
            name: 'comment',
            type: 'text',
            component: TextField,
            variant: 'outlined',
            multiline: true,
            rows: 4
        },


    ];

    const onFormSubmit = (values, { setSubmitting }) => {
        console.log({
            values
        });
    };

    console.log({
        propertyReviewFormModal
    });

    return (
        <Dialog
            TransitionComponent={Transition}
            open={propertyReviewFormModal}
            onClose={() => { dispatch(modalActions.closePropertyReviewModal()); }}
            aria-labelledby="property-review-dialog" maxWidth="sm"
            className={classes.dialog}
        >
            <DialogTitle className={classes.dialogTitle}>
                Create Review
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={initialValues}
                    validationSchema={propertyReviewSchema}
                    onSubmit={onFormSubmit}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>
                            {propertyReviewFields.map(field => (
                                <Box margin={1} className={classes.fieldBox}>
                                    <Field
                                        label={field.label}
                                        name={field.name}
                                        component={field.component}
                                        type={field.type}
                                        variant={field.variant}
                                        className={classes.fieldInput}
                                        multiline={field.multiline && field.multiline}
                                        rows={field.rows && field.rows}
                                    />
                                </Box>
                            ))}

                            <Box margin={1} className={classes.btnActions}>
                                <Button variant="outlined"

                                    onClick={() => dispatch(modalActions.closePropertyReviewModal())} className={classes.cancelBtn}

                                >
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

export default PropertyReviewFormDialog;
