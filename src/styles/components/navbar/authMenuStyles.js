import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

    // '@keyframes fadeIn': {
    //     from: { opacity: 0 },
    //     to: { opacity: 1 }
    // },
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
    avatarContainer: {
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: 'transparent'
        }

    },
    avatarContent: {
        display: 'flex',
        alignItems: 'center',
        "& > *": {
            paddingLeft: '0.35rem',
            paddingRight: '0.35rem',
        }
    },
    avatar: {
        width: 40,
        height: 40,
        objectFit: 'cover',
        objectPosition: 'top'
    },
    profileName: {
        color: theme.palette.secondary.main
    },
    profileArrow: {
        color: theme.palette.secondary.main,
    },
    propertyBtnContainer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark
        }

    }
}));