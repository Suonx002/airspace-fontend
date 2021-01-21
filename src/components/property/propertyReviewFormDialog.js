import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';

import { Dialog, DialogTitle, DialogContent, Box, Typography, Button } from '@material-ui/core';

import * as modalActions from '../../redux/actions/modal/modalActions';

import useStyles from '../../styles/components/property/propertyReviewFormDialogStyles';

const PropertyReviewFormDialog = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const { modal: propertyReviewFormModal } = useSelector(state => state);


    const initialValues = {
        title: '',
        comment: '',
        rating: 5
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
        },
        {
            label: 'Comment',
            name: 'comment',
            type: 'text',
            component: TextField,
        },
        {
            label: 'Rating',
            name: 'rating',
            type: 'number',
            component: TextField,
        },

    ];

    return (
        <Dialog
            open={propertyReviewFormModal}
            onClose={() => { dispatch(modalActions.closePropertyReviewModal()); }}>
            <DialogTitle className={classes.title}>
                Create New Review
            </DialogTitle>
        </Dialog>
    );
};

export default PropertyReviewFormDialog;
