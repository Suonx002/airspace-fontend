import React from 'react';


import { DatePicker } from 'formik-material-ui-pickers';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { Grid, Button, Typography } from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';


import useStyles from '../styles/components/jumbotronStyles';
const Jumbotron = () => {

    const classes = useStyles();



    const initialValues = {
        search: '',
        guests: '',
        arrivalDate: new Date(),
        departureDate: new Date()
    };

    const jumbotronSchema = yup.object().shape({
        search: yup.string().required('Search is required'),
        guests: yup.number().min(1).required('Guest is required'),
        arrivalDate: yup.date().required('Arrival date is required'),
        departureDate: yup.date().required('Departure date is required')
    });

    const jumbotronFields = [
        {
            label: 'Where',
            name: 'search',
            placeholder: 'Search destination',
            icon: <LocationOnIcon className={classes.adornmentIcon} />,
            variant: 'outlined',
            className: 'searchInput',
            outerClassName: 'searchContainer',
            color: 'primary',
            type: 'text',
            component: TextField
        },
        {
            label: 'Arrival Date',
            name: 'arrivalDate',
            variant: 'inline',
            inputVariant: 'outlined',
            margin: 'normal',
            className: 'arriveInput',
            outerClassName: 'arriveContainer',
            disableToolbar: true,
            color: 'primary',
            component: DatePicker


        },
        {
            label: 'Departure Date',
            name: 'departureDate',
            variant: 'inline',
            inputVariant: 'outlined',
            margin: 'normal',
            className: 'departInput',
            outerClassName: 'departContainer',
            disableToolbar: true,
            color: 'primary',
            component: DatePicker


        },
        {
            label: 'Guests',
            name: 'guests',
            variant: 'outlined',
            className: 'guestsInput',
            outerClassName: 'guestsContainer',
            icon: <PeopleIcon className={classes.adornmentIcon} />,
            color: 'primary',
            type: 'number',
            component: TextField


        },
    ];


    const onFormSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);
        console.log({
            values
        });
    };


    return (
        <div className={classes.jumbotron}>
            <Typography variant="h1" className={classes.jumbotronTitle}>Find the perfect vacation rental</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={jumbotronSchema}
                onSubmit={onFormSubmit}
            >


                {({ submitForm, isSubmitting }) => (
                    <Form className={classes.jumbotronForm}>
                        <Grid container className={classes.jumbotronGridContainer}>
                            {jumbotronFields.map(field => (
                                <Grid item className={`${classes[field.outerClassName]}`} key={field.name}>
                                    <Field
                                        className={classes[field.className]}
                                        variant={field.variant}
                                        inputVariant={field?.inputVariant ?? null}
                                        disableToolbar={field?.disableToolbar ?? null}
                                        color={field.color}
                                        component={field.component}
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        type={field.type}
                                        label={field.label}
                                        InputProps={field.icon && {
                                            startAdornment: field.icon
                                        }}
                                    />
                                </Grid>
                            ))}


                            <Grid item className={classes.submitContainer}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color='primary'
                                    className={classes.jumbotronSubmit}
                                    onClick={submitForm}
                                >
                                    <SearchIcon className={classes.searchIcon} /> Search
                            </Button>
                            </Grid>
                        </Grid>

                    </Form>
                )}
            </Formik>

        </div>

    );
    //  (
    //     <div className={classes.jumbotron}>
    //         <Typography variant="h1" className={classes.jumbotronTitle}>Find the perfect vacation rental</Typography>
    //         <form autoComplete="off" className={classes.jumbotronForm} onSubmit={onFormSubmit}>
    //             <Grid container className={classes.jumbotronGridContainer}>
    //                 <Grid item className={classes.searchContainer}>
    //                     <TextField

    //                         variant="outlined"

    //                         className={classes.searchInput}
    //                         label="Where"

    //                         id="search"
    //                         value={search}
    //                         onChange={handleFormChange}
    //                         InputProps={{
    //                             startAdornment: <LocationOnIcon className={classes.adornmentIcon} />
    //                         }}
    //                         placeholder="Search destination"

    //                     />
    //                 </Grid>
    //                 <Grid item className={classes.arriveContainer}>
    //                     <DatePicker
    //                         className={classes.arriveInput}

    //                         disableToolbar
    //                         inputVariant="outlined"
    //                         variant="inline"
    //                         format="MM/dd/yyyy"
    //                         margin="normal"
    //                         label="Arrive"
    //                         id="arrive"
    //                         value={arrive}
    //                         onChange={(date) => { handleDateChange(date, 'arrive'); }}
    //                     />
    //                 </Grid>
    //                 <Grid item className={classes.departContainer}>
    //                     <DatePicker
    //                         className={classes.departInput}
    //                         disableToolbar
    //                         inputVariant="outlined"
    //                         variant="inline"
    //                         format="MM/dd/yyyy"
    //                         margin="normal"
    //                         label="Depart"
    //                         id="depart"
    //                         value={depart}
    //                         onChange={(date) => { handleDateChange(date, 'depart'); }}

    //                     />

    //                 </Grid>
    //                 <Grid item className={classes.guestsContainer}>
    //                     <TextField
    //                         variant="outlined"
    //                         className={classes.guestsInput}
    //                         label="Guests"
    //                         type="number"
    //                         id="guests"
    //                         value={guests}
    //                         onChange={handleFormChange}
    //                         InputProps={{
    //                             startAdornment: <PeopleIcon className={classes.adornmentIcon} />
    //                         }}
    //                     />
    //                 </Grid>
    //                 <Grid item className={classes.submitContainer}>
    //                     <Button
    //                         type="submit"
    //                         variant="contained"
    //                         color='primary'
    //                         className={classes.jumbotronSubmit}>
    //                         <SearchIcon className={classes.searchIcon} /> Search
    //                     </Button>
    //                 </Grid>
    //             </Grid>

    //         </form>
    //     </div>
    // );
};

export default Jumbotron;
