import React from 'react';

import Jumbotron from '../components/jumbotron';
import PropertyListing from '../components/property/propertyListing';
import useStyles from '../styles/pages/homepageStyles';

import mockup from '../components/property/propertyListingMockup';


const Homepage = () => {

    const classes = useStyles();
    return (

        <div className={classes.homepage}>
            {/* Searchbar */}
            <Jumbotron />

            {/* recommended listing */}
            <PropertyListing properties={mockup} propertyHeading='Recommended For You' />
            <PropertyListing properties={mockup} propertyHeading='Latest' />
            <PropertyListing properties={mockup} propertyHeading='Premium Listings' />
            <PropertyListing properties={mockup} propertyHeading='Top Places For Travels' />
            <PropertyListing properties={mockup} propertyHeading='Anywhere' />
        </div>
    );
};

export default Homepage;
