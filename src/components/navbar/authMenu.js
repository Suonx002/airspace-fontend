
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import { Typography, Button, IconButton, Menu, MenuItem, Avatar, Tooltip } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';

import useStyles from '../../styles/components/navbar/authMenuStyles';

import { logoutUser } from '../../redux/actions/auth/authActions';

import capitalizeString from '../../utils/methods/capitalizeString';


import * as modalActions from '../../redux/actions/modal/modalActions';
import PropertyForm from '../property/propertyForm';

const AuthMenu = () => {

    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    // handle menu dropdown (avatar)
    const [avatarAnchor, setAvatarAnchor] = useState(null);
    const handleAvatarAnchorClick = e => setAvatarAnchor(e.currentTarget);
    const handleAvatarAnchorClose = () => setAvatarAnchor(null);

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleViewProfileClicked = (e) => {
        handleAvatarAnchorClick(e);
        //change arrow state to ExpandMoreIcon
        setIsMenuClicked(true);
    };
    return user ? (
        <>
            {/* become a host */}
            { user.role === 'user' && <Button component={Link} to={'/become-a-host'} className={classes.hostBtn}>Become a host</Button>}

            {/* create property as host */}
            { user.role === 'host' &&
                <>
                    <PropertyForm />
                    <IconButton
                        onClick={() => { dispatch(modalActions.showPropertyFormModal()); }}
                        variant="contained"
                        color='primary'
                        className={classes.propertyBtnContainer}>
                        <Tooltip title="Create Property">
                            <AddIcon classname={classes.propertyBtn} />
                        </Tooltip>
                    </IconButton>
                </>
            }

            {/* profile avatar */}
            <IconButton onClick={handleViewProfileClicked} aria-controls="profile-menu" aria-haspopup="true" className={classes.avatarContainer} disableRipple>
                <div className={classes.avatarContent}>
                    <Avatar src={user.profileImage ? user.profileImage : ''} className={classes.avatar} />
                    <Typography variant="body1" className={classes.profileName}>{`${capitalizeString(user.firstName)} ${capitalizeString(user.lastName)}`}</Typography>
                    <Typography variant="body1" className={classes.profileArrow}>{isMenuClicked ? <ExpandLessIcon /> : < ExpandMoreIcon />}</Typography>
                </div>
            </IconButton >
            <Menu
                id="profile-menu"
                anchorEl={avatarAnchor}
                keepMounted
                open={Boolean(avatarAnchor)}
                onClose={() => {
                    handleAvatarAnchorClose();
                    //change arrows state to ExpandLessIcon
                    setIsMenuClicked(false);
                }}
                className={classes.profileMenu}
            >
                <MenuItem onClick={handleAvatarAnchorClose} className={classes.profileMenuItem}>
                    <Typography variant="inherit" className={classes.profileMenuTitle}>Trips</Typography>
                </MenuItem>
                <MenuItem onClick={handleAvatarAnchorClose} className={classes.profileMenuItem}>
                    <Typography variant="inherit" className={classes.profileMenuTitle}>Profile</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        dispatch(logoutUser(enqueueSnackbar));
                        handleAvatarAnchorClose();
                    }}
                    className={classes.profileMenuItem}>
                    <Typography variant="inherit" className={classes.profileMenuTitle}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    ) : null;
};

export default AuthMenu;
