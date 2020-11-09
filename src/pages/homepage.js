import React from 'react'

import Jumbotron from '../components/jumbotron';
import useStyles from '../styles/pages/homepageStyles'



const Homepage = () => {

    const classes = useStyles();
    return (

        <div className={classes.homepage}>
            {/* Searchbar */}
            <Jumbotron />
        </div>
    )
}

export default Homepage
