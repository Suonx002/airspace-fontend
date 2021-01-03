
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@material-ui/core';

import useStyles from '../../styles/components/navbar/authMenuStyles';

const AuthMenu = () => {

    const classes = useStyles();

    // handle menu dropdown (avatar)
    const [avatarAnchor, setAvatarAnchor] = useState(null);
    const handleAvatarAnchorClick = e => setAvatarAnchor(e.currentTarget);
    const handleAvatarAnchorClose = () => setAvatarAnchor(null);

    return (
        <>
            <Button component={Link} to={'/become-a-host'} className={classes.hostBtn}>Become a host</Button>
            {/* profile avatar */}
            <IconButton onClick={handleAvatarAnchorClick} aria-controls="profile-menu" aria-haspopup="true" className={classes.avatarContainer}>
                <Avatar src="https://res.cloudinary.com/airspacerental/image/upload/v1609567013/airspace/properties/property_default.png" className={classes.avatar} />
            </IconButton>
            <Menu
                id="profile-menu"
                anchorEl={avatarAnchor}
                keepMounted
                open={Boolean(avatarAnchor)}
                onClose={handleAvatarAnchorClose}
                className={classes.profileMenu}
            >
                <MenuItem onClick={handleAvatarAnchorClose} className={classes.profileMenuItem}>
                    <Typography variant="inherit" className={classes.profileMenuTitle}>Trips</Typography>
                </MenuItem>
                <MenuItem onClick={handleAvatarAnchorClose} className={classes.profileMenuItem}>
                    <Typography variant="inherit" className={classes.profileMenuTitle}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleAvatarAnchorClose} className={classes.profileMenuItem}>
                    <Typography variant="inherit" className={classes.profileMenuTitle}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default AuthMenu;
