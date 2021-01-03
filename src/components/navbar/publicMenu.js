import React from 'react';
import { Link } from 'react-router-dom';


import { Button } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import useStyles from '../../styles/components/navbar/publicMenuStyles';


const desktopMenuPublicList = [
    {
        title: 'Become a host',
        to: '/become-a-host',
        className: 'hostBtn',
        variant: 'contained'
    },
    {
        title: 'Sign up',
        to: '/signup',
        className: 'signupBtn',
        icon: PersonAddIcon,
        variant: 'text'
    },
    {
        title: 'Login',
        to: '/login',
        className: 'loginBtn',
        icon: PersonIcon,
        variant: 'text'
    },

];

const PublicMenu = () => {

    const classes = useStyles();

    return desktopMenuPublicList.map(menu => (
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
    ));

};

export default PublicMenu;
