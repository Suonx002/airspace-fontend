import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Form, Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';

import {
  Typography,
  Dialog,
  DialogContent,
  Slide,
  Box,
  CircularProgress,
  Button,
} from '@material-ui/core';
import useStyles from '../../styles/components/property/propertyFormStyles';

import * as modalActions from '../../redux/actions/modal/modalActions';
import * as propertyActions from '../../redux/actions/property/propertyActions';

import PropertyDropzoneDialog from './propertyDropzoneDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const PropertyForm = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const {
    modal: { propertyFormModal },
    imageFile: { propertyUploadFile },
    property: { currentProperty },
  } = useSelector((state) => state);

  const initialValues = {
    title: currentProperty?.title ?? '',
    description: currentProperty?.description ?? '',
    address: currentProperty?.address ?? '',
    state: currentProperty?.state ?? '',
    city: currentProperty?.city ?? '',
    bedrooms: currentProperty?.bedrooms ?? '',
    bathrooms: currentProperty?.bathrooms ?? '',
    guests: currentProperty?.guests ?? '',
    zipcode: currentProperty?.zipcode ?? '',
    price: currentProperty?.price ?? '',
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
    price: yup
      .string()
      .matches(/^\d{0,8}(\.\d{1,2})?$/, 'Price must be valid format')
      .required(),
  });

  const onFormSubmit = (values, { setSubmitting }) => {
    if (currentProperty) {
      //update property
      dispatch(
        propertyActions.updateProperty(
          values,
          currentProperty.id,
          propertyUploadFile,
          enqueueSnackbar,
          setSubmitting
        )
      );
    } else {
      if (!propertyUploadFile) {
        enqueueSnackbar('Please upload an image for property!', {
          variant: 'error',
        });
        setSubmitting(false);
        return;
      }

      // create property
      dispatch(
        propertyActions.createProperty(
          { ...values, propertyImage: propertyUploadFile },
          enqueueSnackbar,
          setSubmitting
        )
      );
    }
  };

  const fullWidthFields = [
    {
      label: 'Title',
      name: 'title',
      component: TextField,
      variant: 'outlined',
      type: 'text',
    },
    {
      label: 'Description',
      name: 'description',
      component: TextField,
      variant: 'outlined',
      type: 'text',
      rows: 4,
      multiline: true,
    },
    {
      label: 'Address',
      name: 'address',
      component: TextField,
      variant: 'outlined',
      type: 'text',
    },
    {
      label: 'City',
      name: 'city',
      component: TextField,
      variant: 'outlined',
      type: 'text',
    },
  ];

  const thirdWidthFields = [
    {
      label: 'State',
      name: 'state',
      component: TextField,
      variant: 'outlined',
      type: 'text',
    },
    {
      label: 'Zipcode',
      name: 'zipcode',
      component: TextField,
      variant: 'outlined',
      type: 'text',
    },
    {
      label: 'Price Per Night',
      name: 'price',
      component: TextField,
      variant: 'outlined',
      type: 'number',
    },
    {
      label: 'Number of Guests',
      name: 'guests',
      component: TextField,
      variant: 'outlined',
      type: 'number',
    },
    {
      label: 'Number of Bedrooms',
      name: 'bedrooms',
      component: TextField,
      variant: 'outlined',
      type: 'number',
    },
    {
      label: 'Number of Bathrooms',
      name: 'bathrooms',
      component: TextField,
      variant: 'outlined',
      type: 'number',
    },
  ];

  return (
    <>
      <PropertyDropzoneDialog />
      <Dialog
        open={propertyFormModal}
        onClose={() => {
          dispatch(propertyActions.clearCurrentProperty());
          dispatch(modalActions.closePropertyFormModal());
        }}
        TransitionComponent={Transition}
        aria-labelledby='property-form-dialog'
        maxWidth='sm'
        className={classes.dialog}>
        <DialogContent>
          <Typography variant='h3' className={classes.title}>
            {' '}
            {currentProperty ? 'Update' : 'Create'} Property
          </Typography>
          <Formik
            enableReinitialize={currentProperty ? true : false}
            initialValues={initialValues}
            validationSchema={propertySchema}
            onSubmit={onFormSubmit}>
            {({ submitForm, isSubmitting }) => (
              <Form className={classes.form}>
                <div className={classes.formContent}>
                  {/* full width fields */}
                  {fullWidthFields.map((field) => (
                    <Box key={field.name} className={classes.fullWidthField}>
                      <Field
                        type={field.type}
                        component={field.component}
                        label={field.label}
                        name={field.name}
                        variant={field.variant}
                        multiline={field.multiline && field.multiline}
                        rows={field.rows && field.rows}
                      />
                    </Box>
                  ))}

                  {/* third width fields */}

                  {thirdWidthFields.map((field) => (
                    <Box key={field.name} className={classes.thirdWidthField}>
                      <Field
                        type={field.type}
                        component={field.component}
                        label={field.label}
                        name={field.name}
                        variant={field.variant}
                      />
                    </Box>
                  ))}
                </div>

                <Box className={classes.fileBtnContainer}>
                  <Button
                    variant='outlined'
                    color='primary'
                    className={classes.fileBtn}
                    onClick={() => {
                      dispatch(modalActions.showPropertyDropzone());
                    }}>
                    Upload Image
                  </Button>
                </Box>

                <Box className={classes.btnActions}>
                  <Button
                    variant='outlined'
                    onClick={() =>
                      dispatch(modalActions.closePropertyFormModal())
                    }
                    className={classes.cancelBtn}>
                    Cancel
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className={classes.submitBtn}>
                    {isSubmitting ? (
                      <CircularProgress className={classes.loadingSpinner} />
                    ) : (
                      'Submit'
                    )}
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
