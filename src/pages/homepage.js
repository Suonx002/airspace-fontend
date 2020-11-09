import React from 'react'

import Jumbotron from '../components/jumbotron';
import PropertyListing from '../components/property/propertyListing';
import useStyles from '../styles/pages/homepageStyles'



const Homepage = () => {

    const classes = useStyles();
    return (

        <div className={classes.homepage}>
            {/* Searchbar */}
            <Jumbotron />

            {/* recommended listing */}
            <PropertyListing />
        </div>
    )
}

export default Homepage
