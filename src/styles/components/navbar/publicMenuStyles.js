import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    hostBtn: {
        fontSize: '1.1rem',
        textTransform: 'none',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark
        }
    },
    signupBtn: {
        fontSize: '1.1rem',
        textTransform: ' none',
        "& > span": {
            color: theme.palette.primary.main
        }
    },
    loginBtn: {
        fontSize: '1.1rem',
        textTransform: ' none',
        "& > span": {
            color: theme.palette.primary.main
        }
    },


}));