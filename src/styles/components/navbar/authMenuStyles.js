import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

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
        fontSize: '1.1rem',
        textTransform: 'none',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark
        }
    },
}));