import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    appbar: {
        backgroundColor: theme.palette.common.white,
        borderBottom: `2px solid ${theme.palette.common.lighterColor}`
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',

    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1.25rem'
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    logo: {
        maxWidth: 120,
        objectFit: 'contain'
    },
    avatar: {
        width: 40,
        height: 40
    },
    desktopMenu: {

        "& > *:not(:last-child)": {
            marginRight: '0.5rem',
        },
        "& > *:not(:first-child)": {
            marginLeft: '0.5rem',
        },
        [theme.breakpoints.down(768)]: {
            display: 'none'
        }
    },
    menuIconContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: 'transparent',
        },
        [theme.breakpoints.up(768)]: {
            display: 'none'
        }

    },
    menuIcon: {
        fontSize: 20,
        fill: theme.palette.primary.main,
        padding: '0.35rem',
        border: `0.5px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        transition: 'all 0.2s ease-in-out',
        "&:hover": {
            fill: theme.palette.primary.light,
            border: `0.5px solid ${theme.palette.primary.light}`,
            transform: 'scale(1.05)'
        }
    }

}));