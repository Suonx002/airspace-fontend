import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    dialog: {

    },
    title: {
        marginBottom: '2rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 'bold',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: '1rem 0rem'
    },
    formContent: {
        flexBasis: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    fullWidthField: {
        flexBasis: '100%',
        marginBottom: '0.75rem',
        "& > *": {
            width: '98.5%',
        }
    },
    thirdWidthField: {
        flexBasis: '33.3%',
        marginBottom: '0.75rem',
        "& > *": {
            width: '95%',
        },
        [theme.breakpoints.down(500)]: {
            flexBasis: '50%',
        }
    },
    btnActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        "& > *": {
            marginLeft: '0.25rem',
            marginRight: '0.25rem',
        }
    }

}));