import React from 'react'
import Slider from "react-slick";


import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles/components/property/propertyListingStyles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import PropertyCard from './propertyCard'

import mockup from './propertyListingMockup';




const PropertyListing = () => {

    const classes = useStyles();

    const slickSettings = {
        infinite: true,
        speed: 800,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,

    }

    return (
        <div className={classes.listing}>
            <Typography className={classes.listingTitle}>Recommended for you</Typography>
            <div className={classes.listingGridContainer}>
                <Slider {...slickSettings}>
                    {mockup.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}


                </Slider>
            </div>


        </div>
    )
}

export default PropertyListing
