import React from 'react'


import useStyles from '../../styles/components/property/propertyCardStyles'

const PropertyCard = (props) => {

    const { property } = props;
    const { id,
        title,
        sleep,
        imageUrl,
        bedroom,
        bathroom,
        ratingAverage,
        numberOfReviews,
        price } = property;

    const classes = useStyles();
    return (
        <div className={classes.property}>
            <div className={classes.propertyContent}>
                <img src={imageUrl} alt={title} className={classes.propertyImg} />
                <h4 className={classes.propertyTitle}>
                    {title}
                </h4>
                <p className={classes.propertySleep}>
                    Sleeps <span className={classes.sleep}>{sleep}</span> <span className={classes.bedroom}>{bedroom}</span> BR <span className={classes.bathroom}>{bathroom}</span> BA
                </p>
                <p className={classes.propertyStars}>
                    <span class={classes.propertyStar}>*</span>
                    <span class={classes.propertyStar}>*</span>
                    <span class={classes.propertyStar}>*</span>
                    <span class={classes.propertyStar}>*</span>
                    <span class={classes.propertyStar}>*</span>
                </p>
                <p className={classes.propertyPrice}>${price} avg/night</p>
            </div>
        </div>
    )
}

export default PropertyCard
