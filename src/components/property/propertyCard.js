import { Typography } from '@material-ui/core';
import React from 'react';


import useStyles from '../../styles/components/property/propertyCardStyles';

const PropertyCard = (props) => {

    const { property } = props;

    console.log({ property });
    const {
        title,
        bathrooms,
        bedrooms,
        city,
        guests,
        id,
        price,
        propertyImage,
        propertyReviews,
        slug,
        state,
    } = property;

    const classes = useStyles();
    return (
        <div className={classes.property}>
            <div className={classes.propertyContent}>
                <img src={propertyImage} alt={title} className={classes.propertyImg} />
                <Typography variant="h4" className={classes.propertyTitle}>
                    {title}
                </Typography>
                <Typography variant="h5" className={classes.propertySubtitle}>
                    {city}, {state}
                </Typography>
                <Typography variant="body1" className={classes.propertySleep}>
                    Sleeps <span className={classes.sleep}>{guests}  </span>  <span className={classes.bedroom}>{bedrooms}  </span> BR <span className={classes.bathroom}>{bathrooms}</span> BA
                </Typography>
                <Typography variant="body1" className={classes.propertyStars}>
                    {propertyReviews.length === 0 ? 0 : propertyReviews.length} {propertyReviews.length > 1 ? 'Reviews' : 'Review'}
                </Typography>
                <Typography variant="body1" className={classes.propertyPrice}>${price} avg/night</Typography>
            </div>
        </div>
    );
};

export default PropertyCard;
