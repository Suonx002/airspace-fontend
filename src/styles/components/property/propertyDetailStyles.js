import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    property: {
        maxWidth: 1400,
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // boxShadow: '0 0 8px rgba(19, 46, 70, 0.3)',
        padding: '1.5rem',
        marginTop: '4rem'

    },
    propertyLeft: {
        flexBasis: '75%'
    },
    propertyRight: {
        flexBasis: '25%'

    },
    propertyImgContainer: {
        marginBottom: '1.5rem'
    },
    propertyImg: {
        width: '100%',
        maxHeight: 500,
        objectFit: 'cover',
        objectPosition: 'center'
    },
    title: {
        marginBottom: '1.5rem'
    },
    propertyDetail: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'stretch',
        alignItems: 'stretch',


    },
    propertyDetailItem: {
        flexBasis: '33.3%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'stretch',
        alignItems: 'stretch'
    },
    propertyDetailItemInner: {
        flexBasis: '100%',
        padding: '0.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'stretch',
        alignItems: 'stretch'
    },
    propertyDetailItemInnerBorder: {
        flexBasis: '100%',
        boxShadow: '0 0 8px rgba(19, 46, 70, 0.3)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        "& svg": {
            marginBottom: '0.5rem',
            fontSize: '3.5rem',
            color: theme.palette.common.white
        }
    },
    propertyDetailTitle: {
        fontSize: '1.1rem',
        color: theme.palette.common.white

    }



}));
