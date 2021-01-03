import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Toolbar, AppBar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from '../../styles/components/navbar/navbarStyles';

import AirspaceLogo from '../../assets/airspace.png';

const desktopMenuPublicList = [
    {
        title: 'Login',
        to: '/login',
        className: 'loginBtn',
        icon: PersonIcon,
        variant: 'text'
    },
    {
        title: 'Sign up',
        to: '/signup',
        className: 'signupBtn',
        icon: PersonAddIcon,
        variant: 'text'
    },
    {
        title: 'Become a host',
        to: '/become-a-host',
        className: 'hostBtn',
        variant: 'contained'
    },
];

const Navbar = () => {

    const classes = useStyles();

    const [avatarAnchor, setAvatarAnchor] = useState(null);

    const handleAvatarAnchorClick = e => setAvatarAnchor(e.currentTarget);
    const handleAvatarAnchorClose = () => setAvatarAnchor(null);


    const loginMenu = (
        <div className={classes.desktopMenu}>
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

        </div>
    );

    return (
        <AppBar position='fixed' className={classes.appbar} elevation={0}>
            <Toolbar className={classes.toolbar}>
                {/* logo */}
                <IconButton className={classes.logoContainer} component={Link} to="/">
                    <img src={AirspaceLogo} alt="logo" className={classes.logo} />
                </IconButton>
                {/* right menu */}
                <div className={classes.rightMenu}>
                    <div className={classes.desktopMenu}>
                        {desktopMenuPublicList.map(menu => (
                            <Button
                                key={menu.title}
                                component={Link}
                                to={menu.to}
                                variant={menu.variant}
                                className={classes[menu.className]}
                                startIcon={menu.icon ? <menu.icon className={classes.startIcon} /> : null}
                            >
                                {menu.title}
                            </Button>
                        ))}
                    </div>
                    {/* {loginMenu} */}
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
