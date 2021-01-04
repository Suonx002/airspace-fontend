import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { Button } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import useStyles from '../../styles/components/navbar/publicMenuStyles';

import { showSignupModal } from '../../redux/actions/modal/modalActions';
import Signup from '../auth/signup';
import Login from '../auth/login';




const PublicMenu = () => {

    const classes = useStyles();
    const dispatch = useDispatch();


    const desktopMenuPublicList = [
        {
            title: 'Become a host',
            link: Link,
            to: '/become-a-host',
            className: 'hostBtn',
            variant: 'contained'
        },
        {
            title: 'Sign up',
            className: 'signupBtn',
            icon: PersonAddIcon,
            variant: 'text',
            onClick: () => dispatch(showSignupModal())
        },
        {
            title: 'Login',
            link: Link,
            to: '/login',
            className: 'loginBtn',
            icon: PersonIcon,
            variant: 'text'
        },

    ];

    return <>
        <Signup />
        <Login />
        { desktopMenuPublicList.map(menu => (
            <Button
                key={menu.title}
                component={menu.link && menu.link}
                to={menu.to ? menu.to : null}
                variant={menu.variant}
                className={classes[menu.className]}
                startIcon={menu.icon ? <menu.icon className={classes.startIcon} /> : null}
                onClick={menu.onClick ? menu.onClick : null}
            >
                {menu.title}
            </Button>
        ))}

    </>;

};

export default PublicMenu;
