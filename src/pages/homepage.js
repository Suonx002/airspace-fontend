import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import Jumbotron from '../components/jumbotron';
import PropertyListing from '../components/property/propertyListing';
import useStyles from '../styles/pages/homepageStyles';

import mockup from '../components/property/propertyListingMockup';

import * as propertyActions from '../redux/actions/property/propertyActions';


const Homepage = () => {

    const classes = useStyles();

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const { homepageProperties } = useSelector(state => state.property);


    useEffect(() => {

        dispatch(propertyActions.getHomepageProperties());


    }, []);

    console.log({ homepageProperties });


    return (

        <div className={classes.homepage}>
            {/* Searchbar */}
            <Jumbotron />

            {/* Home properties listing */}
            {homepageProperties && homepageProperties !== null && (
                <>
                    <PropertyListing properties={homepageProperties.recommendedProperties} propertyHeading='Recommended For You' />
                    <PropertyListing properties={homepageProperties.latestProperties} propertyHeading='Latest' />
                    <PropertyListing properties={homepageProperties.premiumProperties} propertyHeading='Premium Listings' />
                </>
            )}
        </div>
    );
};

export default Homepage;
