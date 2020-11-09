import { makeStyles } from '@material-ui/core/styles'

import LandingJumbo from '../../assets/landing-jumbo.jpg'

export default makeStyles(theme => ({

    jumbotron: {
        background: ` linear-gradient(
            rgba(0, 0, 0, 0.4), 
            rgba(0, 0, 0, 0.4)
          ),url(${LandingJumbo}) no-repeat center center/cover`,
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
    },
    jumbotronForm: {

        padding: '1rem 1.5rem',
        backgroundColor: '#f5f5f5',
        border: 'none',
        borderRadius: 4,
        boxShadow: '0 0 2px 1px rgba(19, 46, 70, 0.8)',
        maxWidth: 1400,
        margin: '1.5rem 20px'

    },
    jumbotronGridContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    searchContainer: {
        flexBasis: '35%',
        margin: '0',
        [theme.breakpoints.down(992)]: {
            flexBasis: '100%',
            marginBottom: '1.5rem'

        }
    },
    searchInput: {
        width: '100%'
    },
    arriveContainer: {
        flexBasis: '15%',
        width: '100%',
        margin: '0',
        paddingLeft: '1rem',
        "& .MuiOutlinedInput-root": {
            borderTopRightRadius: '0 !important',
            borderBottomRightRadius: '0 !important',
        },
        "& .MuiFormControl-marginNormal": {
            marginTop: 0,
            marginBottom: 0
        },
        [theme.breakpoints.down(992)]: {
            flexBasis: '25%',
            paddingLeft: 0
        },
        [theme.breakpoints.down(767)]: {
            flexBasis: '50%',
            marginBottom: '1.5rem'
        },
    },
    arriveInput: {
        [theme.breakpoints.down(767)]: {
            width: '100%'
        }
    },
    departContainer: {
        flexBasis: '15%',
        width: '100%',
        margin: '0',

        "& .MuiOutlinedInput-root": {
            borderTopLeftRadius: '0 !important',
            borderBottomLeftRadius: '0 !important',
        },
        "& .MuiFormControl-marginNormal": {
            marginTop: 0,
            marginBottom: 0
        },
        [theme.breakpoints.down(992)]: {
            flexBasis: '25%',
        },
        [theme.breakpoints.down(767)]: {
            flexBasis: '50%',
            marginBottom: '1.5rem'
        },
    },
    departInput: {
        [theme.breakpoints.down(767)]: {
            width: '100%'
        }
    },
    guestsContainer: {
        flexBasis: '15%',
        paddingLeft: '1rem',
        margin: '0',
        [theme.breakpoints.down(992)]: {
            flexBasis: '25%',
        },
        [theme.breakpoints.down(767)]: {
            flexBasis: '100%',
            marginBottom: '1.5rem',
            paddingLeft: '0',

        },
    },
    guestsInput: {
        [theme.breakpoints.down(767)]: {
            width: '100%'
        }
    },
    adornmentIcon: {
        paddingRight: '0.5rem'
    },
    submitContainer: {
        flexBasis: '20%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '1rem',
        [theme.breakpoints.down(992)]: {
            flexBasis: '25%',
        },
        [theme.breakpoints.down(767)]: {
            paddingLeft: 0,
            flexBasis: '100%'
        }


    },
    jumbotronSubmit: {
        padding: '0.8rem 1.5rem',
        width: '100%',
        textTransform: 'unset',
        fontSize: 18
    },
    searchIcon: {
        fontSize: 20,
        paddingRight: '0.2rem'
    }

}))