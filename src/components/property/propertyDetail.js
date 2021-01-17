import React from 'react';


import { Box, Typography, IconButton, Button, Avatar } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import BathtubIcon from '@material-ui/icons/Bathtub';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import useStyles from '../../styles/components/property/propertyDetailStyles';

import capitalizeString from '../../utils/methods/capitalizeString';


const mockup = {
    id: 1,
    slug: "central-park-house",
    title: "Central Park House",
    description: "Central Park is an urban park in New York City located between the Upper West and Upper East Sides of Manhattan.",
    address: "Central Park",
    city: "New York",
    state: "NY",
    zipcode: "10028",
    bedrooms: 3,
    bathrooms: 5,
    guests: 10,
    price: 250,
    userId: "156fb36e-8973-45f1-8e1f-30bb1cd43316",
    createdAt: "2021-01-15T06:34:54.043Z",
    updatedAt: "2021-01-15T06:34:54.043Z",
    propertyImage: "https://res.cloudinary.com/airspacerental/image/upload/v1610603128/airspace/properties/house-1_subjva.jpg",
    propertyReviews: [
        {
            title: "Amazing stay!",
            comment: "Amazing stay with friends.",
            rating: 5,
            user: {
                firstName: "briana",
                lastName: "vander",
                profileImage: "https://res.cloudinary.com/airspacerental/image/upload/v1610692325/airspace/users/person-default_uikdlb.png"
            }
        },
        {
            title: "Weekend trip",
            comment: "Great place for a weekend trip.",
            rating: 5,
            user: {
                firstName: "jack",
                lastName: "sparrow",
                profileImage: "https://res.cloudinary.com/airspacerental/image/upload/v1610692325/airspace/users/person-default_uikdlb.png"
            }
        },
        {
            title: "Clean",
            comment: "Clean, friendly, full of extra touches, close to a lot bur far enough to be quiet and peaceful.",
            rating: 5,
            user: {
                firstName: "anderson",
                lastName: "marz",
                profileImage: "https://res.cloudinary.com/airspacerental/image/upload/v1610692325/airspace/users/person-default_uikdlb.png"
            }
        },

    ],
    user: {
        firstName: "amy",
        lastName: "dinh",
        username: "amy",
        email: "amy@gmail.com",
        profileImage: "https://res.cloudinary.com/airspacerental/image/upload/v1610692325/airspace/users/person-default_uikdlb.png"
    }
};


const PropertyDetail = () => {

    const classes = useStyles();

    const propertyDetailsSections = [
        {
            icon: <AttachMoneyIcon />,
            title: `$${mockup.price} / night`
        },
        {
            icon: <LocationOnIcon />,
            titleTop: `${mockup.address}`,
            title: `${mockup.city} ${mockup.state}, ${mockup.zipcode}`
        },
        {
            icon: <PeopleIcon />,
            title: `${mockup.guests} ${mockup.guests === 1 ? 'Guest' : 'Guests'}`
        },
        {
            icon: <MeetingRoomIcon />,
            title: `${mockup.bedrooms} ${mockup.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}`
        },
        {
            icon: <BathtubIcon />,
            title: `${mockup.bathrooms} ${mockup.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}`
        },
    ];


    return (

        <Box className={classes.property}>
            {/* left  75% */}
            <Box className={classes.propertyLeft}>
                <Box className={classes.propertyLeftInner}>

                    <Box className={classes.propertyImgContainer}>
                        <img src={mockup.propertyImage} alt={mockup.title} className={classes.propertyImg} />
                    </Box>

                    <Box className={classes.avatarContainer}>
                        <Avatar src={mockup.user.profileImage} alt={mockup.title} />
                        <Typography className={classes.fullName}>
                            {mockup.user.firstName} {mockup.user.lastName}
                        </Typography>
                    </Box>

                    <Box className={classes.propertyContent}>
                        <Typography variant="h2" color="primary" className={classes.title}>
                            {mockup.title}
                        </Typography>
                        <Box className={classes.propertyDetail}>
                            {propertyDetailsSections.map(item => (
                                <Box key={item.title} className={classes.propertyDetailItem}>
                                    <Box className={classes.propertyDetailItemInner}>
                                        <Box className={classes.propertyDetailItemInnerBorder}>

                                            {item.icon}
                                            <Box className={classes.propertyDetailContent}>
                                                {item.titleTop && <Typography className={classes.propertyDetailTitle}>
                                                    {item.titleTop}
                                                </Typography>}
                                                <Typography className={classes.propertyDetailTitle}>
                                                    {item.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <Box className={classes.propertyDescription}>

                            <Typography variant="body1">
                                {mockup.description}
                            </Typography>
                        </Box>
                        <Box className={classes.propertyReviews}>
                            <Typography variant="h4" className={classes.propertyReviewTitle}>
                                Reviews
                            </Typography>
                            {mockup.propertyReviews.map(review => (

                                <Box className={classes.propertyReviewItem}>
                                    <Box className={classes.propertyReviewItemInner}>
                                        <Box className={classes.propertyReviewUser}>
                                            <Avatar src={review.user.profileImage} alt={review.user.firstName} className={classes.profileReviewImage} />
                                            <Typography variant="h5" className={classes.propertyReviewFullName}>
                                                {capitalizeString(review.user.firstName)} {capitalizeString(review.user.lastName)}
                                            </Typography>
                                            <Box className={classes.ratingStarContainer}>
                                                {review.rating === 1 ? (
                                                    <Box className={classes.ratingStar}>
                                                        <StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />
                                                    </Box>
                                                ) : review.rating === 2 ? (
                                                    <Box className={classes.ratingStar}>
                                                        <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />
                                                    </Box>
                                                ) : review.rating === 3 ? (
                                                    <Box className={classes.ratingStar}>
                                                        <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon /> <StarBorderIcon />
                                                    </Box>
                                                ) : review.rating === 4 ? (
                                                    <Box className={classes.ratingStar}>
                                                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon />
                                                    </Box>
                                                ) : (
                                                                    <Box className={classes.ratingStar}>
                                                                        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                                                    </Box>


                                                                )}
                                            </Box>
                                        </Box>

                                        <Typography variant="body1" className={classes.propertyReviewDescription}>
                                            {review.comment}
                                        </Typography>
                                    </Box>

                                </Box>
                            ))}




                            {/* {
            title: "Clean",
            comment: "Clean, friendly, full of extra touches, close to a lot bur far enough to be quiet and peaceful.",
            rating: 5,
            user: {
                firstName: "anderson",
                lastName: "marz",
                profileImage: "https://res.cloudinary.com/airspacerental/image/upload/v1610692325/airspace/users/person-default_uikdlb.png"
            }
        } */}

                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* right 25%*/}
            <Box className={classes.propertyRight}>
                <Box className={classes.propertyRightInner}>

                    <Typography variant="h2" className={classes.bookTitle}> Book Reservation</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default PropertyDetail;
