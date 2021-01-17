import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Form, Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';

import { Typography, Dialog, DialogContent, Slide, Box, CircularProgress, Button } from '@material-ui/core';
import useStyles from '../../styles/components/property/propertyFormStyles';

import * as modalActions from '../../redux/actions/modal/modalActions';

import PropertyDropzoneDialog from './propertyDropzoneDialog';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PropertyForm = () => {

    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const { modal: { propertyFormModal }, imageFile: { propertyUploadFile } } = useSelector(state => state);

    const initialValues = {
        title: '',
        description: '',
        address: '',
        state: '',
        city: '',
        bedrooms: 1,
        bathrooms: 1,
        guests: 1,
        zipcode: '',
        price: 0,
    };

    const propertySchema = yup.object().shape({
        title: yup.string().min(3).required(),
        description: yup.string().min(5).required(),
        address: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        bedrooms: yup.number().min(1).max(20).required(),
        bathrooms: yup.number().min(1).max(20).required(),
        guests: yup.number().min(1).max(100).required(),
        zipcode: yup.string().length(5).required(),
        price: yup.string().matches(/^\d{0,8}(\.\d{1,2})?$/, 'Price must be valid format').required(),
    });


    const onFormSubmit = (values, { setSubmitting }) => {

        if (!propertyUploadFile) {
            enqueueSnackbar('Please upload an image for property!', {
                variant: 'error',
            });
            // setSubmitting(false);
            return;
        }


    };

    const fullWidthFields = [
        {
            label: 'Title',
            name: 'title',
            component: TextField,
            variant: 'outlined',
            type: 'text'
        },
        {
            label: 'Description',
            name: 'description',
            component: TextField,
            variant: 'outlined',
            type: 'text'
        },
        {
            label: 'Address',
            name: 'address',
            component: TextField,
            variant: 'outlined',
            type: 'text'
        },
        {
            label: 'City',
            name: 'city',
            component: TextField,
            variant: 'outlined',
            type: 'text'
        },
    ];

    const thirdWidthFields = [

        {
            label: 'State',
            name: 'state',
            component: TextField,
            variant: 'outlined',
            type: 'text'
        },
        {
            label: 'Zipcode',
            name: 'zipcode',
            component: TextField,
            variant: 'outlined',
            type: 'text'
        },
        {
            label: 'Price Per Night',
            name: 'price',
            component: TextField,
            variant: 'outlined',
            type: 'number'
        },
        {
            label: 'Number of Guests',
            name: 'guests',
            component: TextField,
            variant: 'outlined',
            type: 'number'
        },
        {
            label: 'Number of Bedrooms',
            name: 'bedrooms',
            component: TextField,
            variant: 'outlined',
            type: 'number'
        },
        {
            label: 'Number of Bathrooms',
            name: 'bathrooms',
            component: TextField,
            variant: 'outlined',
            type: 'number'
        },
    ];

    return (
        <>
            <PropertyDropzoneDialog />
            <Dialog
                open={propertyFormModal}
                onClose={() => { dispatch(modalActions.closePropertyFormModal()); }}
                TransitionComponent={Transition}
                aria-labelledby="property-form-dialog" maxWidth="sm"
                className={classes.dialog}
            >
                <DialogContent>
                    <Typography variant="h3" className={classes.title}> Create Property</Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={propertySchema}
                        onSubmit={onFormSubmit}
                    >
                        {({ submitForm, isSubmitting }) => (
                            <Form className={classes.form}>
                                <div className={classes.formContent}>

                                    {/* full width fields */}
                                    {fullWidthFields.map(field => (
                                        <Box key={field.name} className={classes.fullWidthField}>
                                            <Field type={field.type} component={field.component} label={field.label} name={field.name} variant={field.variant} />
                                        </Box>
                                    ))}

                                    {/* third width fields */}

                                    {thirdWidthFields.map(field => (
                                        <Box key={field.name} className={classes.thirdWidthField}>
                                            <Field type={field.type} component={field.component} label={field.label} name={field.name} variant={field.variant} />
                                        </Box>
                                    ))}


                                </div>

                                <Box className={classes.fileBtnContainer}>
                                    <Button variant="outlined" color="primary" className={classes.fileBtn} >Upload Image</Button>
                                </Box>

                                <Box className={classes.btnActions}>
                                    <Button variant="outlined" onClick={() => dispatch(modalActions.closePropertyFormModal())} className={classes.cancelBtn}>
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
        </>
    );
};

export default PropertyForm;
