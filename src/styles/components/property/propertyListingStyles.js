import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    listing: {
        padding: '2rem 0',
        "&:nth-child(odd)": {
            backgroundColor: theme.palette.common.lighterColor
        }
    },
    listingGridContainer: {
        padding: '1rem',
        [theme.breakpoints.down(550)]: {
            padding: '0.5rem',
        }
    },
    listingTitle: {
        padding: '1rem',
        fontWeight: 600,
        color: theme.palette.secondary.main,
        position: 'relative',
        display: 'inline-block',
        "&:after": {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '30%',
            height: 5,
            backgroundColor: theme.palette.common.tertiaryColor,
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 0

        }
    },
    sliders: {
        padding: '0 2rem !important',
        [theme.breakpoints.down(550)]: {
            padding: '2rem 1.5rem !important',
        },
    },



}));