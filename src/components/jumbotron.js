import React, { useState } from 'react'
import { DatePicker } from '@material-ui/pickers'

import { TextField, Grid, Button, InputAdornment, Typography } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';


import useStyles from '../styles/components/jumbotronStyles'
const Jumbotron = () => {

    const classes = useStyles();
    const [inputFields, setInputFields] = useState({
        search: '',

        guests: '',
    })

    const [selectedDate, setSelectedDate] = useState({
        arrive: new Date(),
        depart: new Date(),
    })

    const { search, guests } = inputFields;
    const { arrive, depart } = selectedDate;

    const handleFormChange = (e) => {
        setInputFields({ ...inputFields, [e.target.id]: e.target.value })
    }

    const handleDateChange = (date, field) => {
        setSelectedDate({ ...selectedDate, [field]: date })
    }

    const onFormSubmit = e => {
        e.preventDefault();

        console.log({
            search, arrive, depart, guests
        })
    }


    return (
        <div className={classes.jumbotron}>
            <Typography variant="h1" className={classes.jumbotronTitle}>Find the perfect vacation rental</Typography>
            <form autoComplete="off" className={classes.jumbotronForm} onSubmit={onFormSubmit}>
                <Grid container className={classes.jumbotronGridContainer}>
                    <Grid item className={classes.searchContainer}>
                        <TextField

                            variant="outlined"

                            className={classes.searchInput}
                            label="Where"

                            id="search"
                            value={search}
                            onChange={handleFormChange}
                            InputProps={{
                                startAdornment: <LocationOnIcon className={classes.adornmentIcon} />
                            }}
                            placeholder="Search destination"

                        />
                    </Grid>
                    <Grid item className={classes.arriveContainer}>
                        <DatePicker
                            className={classes.arriveInput}

                            disableToolbar
                            inputVariant="outlined"
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            label="Arrive"
                            id="arrive"
                            value={arrive}
                            onChange={(date) => { handleDateChange(date, 'arrive') }}
                        />
                    </Grid>
                    <Grid item className={classes.departContainer}>
                        <DatePicker
                            className={classes.departInput}
                            disableToolbar
                            inputVariant="outlined"
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            label="Depart"
                            id="depart"
                            value={depart}
                            onChange={(date) => { handleDateChange(date, 'depart') }}

                        />

                    </Grid>
                    <Grid item className={classes.guestsContainer}>
                        <TextField
                            variant="outlined"
                            className={classes.guestsInput}
                            label="Guests"
                            type="number"
                            id="guests"
                            value={guests}
                            onChange={handleFormChange}
                            InputProps={{
                                startAdornment: <PeopleIcon className={classes.adornmentIcon} />
                            }}
                        />
                    </Grid>
                    <Grid item className={classes.submitContainer}>
                        <Button
                            type="submit"
                            variant="contained"
                            color='primary'
                            className={classes.jumbotronSubmit}>
                            <SearchIcon className={classes.searchIcon} /> Search
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </div>
    )
}

export default Jumbotron
