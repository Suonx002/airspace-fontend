import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Toolbar, AppBar, IconButton } from '@material-ui/core';


import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../../styles/components/navbar/navbarStyles';

import AirspaceLogo from '../../assets/airspace.png';
import AuthMenu from './authMenu';
import PublicMenu from './publicMenu';



const Navbar = () => {

    const classes = useStyles();
    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <>
            <AppBar position='fixed' className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    {/* logo */}
                    <IconButton className={classes.logoContainer} component={Link} to="/">
                        <img src={AirspaceLogo} alt="logo" className={classes.logo} />
                    </IconButton>
                    {/* right menu */}
                    <div className={classes.rightMenu}>
                        {/* desktop menu */}
                        <div className={classes.desktopMenu}>
                            {isAuthenticated ? <AuthMenu /> : <PublicMenu />}
                        </div>
                        {/* mobile menu */}
                        <IconButton className={classes.menuIconContainer}>
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </>
    );
};

export default Navbar;
