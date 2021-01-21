import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';




import { Box, Typography, IconButton, Avatar, Tooltip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import BathtubIcon from '@material-ui/icons/Bathtub';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from '../../styles/components/property/propertyDetailStyles';

import capitalizeString from '../../utils/methods/capitalizeString';

import * as propertyActions from '../../redux/actions/property/propertyActions';

const PropertyDetail = (props) => {


    const classes = useStyles();

    const { enqueueSnackbar } = useSnackbar();

    const params = useParams();

    const dispatch = useDispatch();
    const { property } = useSelector(state => state.property);



    useEffect(() => {
        if (params.propertyId) {
            dispatch(propertyActions.getSingleProperty(params.propertyId, enqueueSnackbar));
        }

        //eslint-disable-next-line
    }, [params]);

    const propertyDetailsSections = property !== null && property !== undefined && [
        {
            icon: <AttachMoneyIcon />,
            title: `$${Number(property.price).toFixed(2)} / night`
        },
        {
            icon: <LocationOnIcon />,
            titleTop: `${property.address}`,
            title: `${property.city} ${property.state}, ${property.zipcode}`
        },
        {
            icon: <PeopleIcon />,
            title: `${property.guests} ${property.guests === 1 ? 'Guest' : 'Guests'}`
        },
        {
            icon: <MeetingRoomIcon />,
            title: `${property.bedrooms} ${property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}`
        },
        {
            icon: <BathtubIcon />,
            title: `${property.bathrooms} ${property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}`
        },
    ];


    return property !== null && property !== undefined ? (
        <section className={classes.propertyContainer}>
            <Box className={classes.property}>
                {/* left  75% */}
                <Box className={classes.propertyLeft}>
                    <Box className={classes.propertyLeftInner}>

                        <Box className={classes.propertyImgContainer}>
                            <img src={property.propertyImage} alt={property.title} className={classes.propertyImg} />
                        </Box>
                        <Box className={classes.profileContainer}>
                            <Box className={classes.avatarContainer}>
                                <Avatar src={property.user.profileImage} alt={property.title} />
                                <Typography className={classes.fullName}>
                                    {capitalizeString(property.user.firstName)} {capitalizeString(property.user.lastName)}
                                </Typography>
                            </Box>

                            <Box className={classes.btnActions}>
                                <Tooltip title="Edit Property">

                                    <IconButton className={classes.editIconContainer}>
                                        <EditIcon className={classes.editIcon} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete Property">

                                    <IconButton className={classes.deleteIconContainer}>
                                        <DeleteIcon className={classes.deleteIcon} />
                                    </IconButton>
                                </Tooltip>

                            </Box>
                        </Box>
                        <Box className={classes.propertyContent}>
                            <Typography variant="h2" color="primary" className={classes.title}>
                                {property.title}
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
                                <Typography variant="h4" className={classes.propertyReviewTitle}>
                                    Description
                            </Typography>

                                <Typography variant="body1">
                                    {property.description}
                                </Typography>
                            </Box>
                            <Box className={classes.propertyReviews}>
                                <Typography variant="h4" className={classes.propertyReviewTitle}>
                                    Reviews
                            </Typography>
                                {property.propertyReviews.map(review => (

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
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* right 25%*/}
                {/* <Box className={classes.propertyRight}>
                    <Box className={classes.propertyRightInner}>

                        <Typography variant="h2" className={classes.bookTitle}> Book Reservation</Typography>
                    </Box>
                </Box> */}
            </Box>
        </section>
    ) : null;
};

export default PropertyDetail;
