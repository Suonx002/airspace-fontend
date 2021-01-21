import React from 'react';
import Slider from "react-slick";



import { Typography } from '@material-ui/core';
import useStyles from '../../styles/components/property/propertyListingStyles';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import PropertyCard from './propertyCard';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prevArrowContainer`}
            style={{ ...style }}

            onClick={onClick}
        >
            <ChevronLeftIcon className={'prevArrow'} />
        </div>
    );
};



const NextArrow = (props) => {

    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} nextArrowContainer`}
            style={{ ...style }}
            onClick={onClick}

        >
            <ChevronRightIcon className={'nextArrow'} />
        </div>
    );
};

const PropertyListing = (props) => {

    const classes = useStyles();

    const { properties, propertyHeading } = props;


    const slickSettings = {
        infinite: true,
        speed: 800,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [

            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: 'none'
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };

    return properties && properties.length > 0 ? (
        <div className={classes.listing}>
            <Typography variant="h3" className={classes.listingTitle}>{propertyHeading}</Typography>

            <div className={classes.listingGridContainer}>
                <Slider {...slickSettings} className={classes.sliders} style={{ minWidth: 0, minHeight: 0 }}>
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </Slider>
            </div>
        </div>
    ) : null;
};

export default PropertyListing;
