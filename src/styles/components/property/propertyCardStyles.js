import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    property: {
        padding: '0.75rem',
        "& div": {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',
            alignItems: 'stretch',
            paddingBottom: '0.75rem',
            boxShadow: `0 0 8px rgba(19, 46, 70, 0.15)`,
            "& .MuiTypography-root": {
                paddingLeft: '0.75rem'
            }
        },
        [theme.breakpoints.down(550)]: {
            padding: '1.25rem',

        }
    },
    propertyImg: {
        width: '100%',
        height: 180,
        objectFit: 'cover',
        objectPosition: 'center',
        marginBottom: '0.5rem',
        [theme.breakpoints.down(550)]: {
            height: 225,

        }
    },
    propertyTitle: {
        fontSize: '1.25em',
        color: theme.palette.primary.main,
        marginBottom: '0.25rem',
        textTransform: 'capitalize',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        maxWidth: 200
    },
    propertySubtitle: {
        fontSize: '1rem',
        color: theme.palette.primary.dark,
        marginBottom: '0.5rem'
    },
    propertyPrice: {
        color: theme.palette.primary.main
    }
}));