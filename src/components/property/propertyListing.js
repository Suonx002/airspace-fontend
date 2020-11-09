import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles/components/property/propertyListingStyles'

import PropertyCard from './propertyCard'

import mockup from './propertyListingMockup';


const PropertyListing = () => {

    const classes = useStyles();

    return (
        <div className={classes.listing}>
            <Typography className={classes.listingTitle}>Recommended for you</Typography>
            <Grid container className={classes.listingGridContainer}>
                {mockup.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </Grid>

        </div>
    )
}

export default PropertyListing
