import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    appbar: {
        backgroundColor: theme.palette.common.white
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoContainer: {
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    logo: {
        maxWidth: 100
    },
    avatar: {
        width: 40,
        height: 40
    },
    profileMenu: {
        marginTop: 55
    },
    profileMenuItem: {
        textAlign: 'center',
        minWidth: 150,
        padding: '0.5rem',

    },
    profileMenuTitle: {
        width: '100%'
    },
    desktopMenu: {

        "& > *:not(:last-child)": {
            marginRight: '0.5rem',
        },
        "& > *:not(:first-child)": {
            marginLeft: '0.5rem',
        }
    },
    hostBtn: {
        textTransform: 'none'
    },
    signupBtn: {
        fontSize: '1.3rem',
        textTransform: ' none',
        "& > span": {
            color: theme.palette.primary.main
        }
    },
    loginBtn: {
        fontSize: '1.3rem',
        textTransform: ' none',
        "& > span": {
            color: theme.palette.primary.main
        }
    },
    startIcon: {
        fontSize: '1.3rem !important'

    }
}));