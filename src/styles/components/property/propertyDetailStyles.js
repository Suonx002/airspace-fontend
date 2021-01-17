import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    property: {
        maxWidth: 1200,
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxShadow: '0 0 8px rgba(19, 46, 70, 0.05)',
        padding: '1.5rem',
        marginTop: '4rem'

    },
    propertyLeft: {
        flexBasis: '70%',
    },
    propertyRight: {
        flexBasis: '30%',
    },
    propertyLeftInner: {
        padding: '1rem'
    },
    propertyRightInner: {
        padding: '1rem'
    },
    avatarContainer: {

        padding: '1rem',
        marginBottom: '1.5rem',
        borderBottom: `2px solid ${theme.palette.common.lighterColor}`
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
        marginBottom: '1.5rem',
        padding: '1rem',
        color: theme.palette.secondary.main
    },
    propertyDetail: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        padding: '0.5rem'


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
    },
    propertyDescription: {
        padding: '1rem'
    },
    propertyReviewTitle: {
        marginBottom: '1.5rem',
        color: theme.palette.secondary.main
    },
    propertyReviews: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem'
    },
    propertyReviewItem: {
        flexBasis: '100%',
        marginBottom: '1.5rem'
    },
    propertyReviewItemInner: {
        padding: '1rem',
        boxShadow: '0 0 8px rgba(19, 46, 70, 0.1)',
    },
    propertyReviewUser: {
        marginBottom: '1rem',
        paddingBottom: '1rem',
        borderBottom: `1px solid ${theme.palette.common.lighterColor}`
    },
    propertyReviewFullName: {
        color: theme.palette.common.primaryColor
    },
    profileReviewImage: {
        marginLeft: '2.5rem ',
        marginBottom: '0.5rem'
    },
    ratingStar: {
        marginTop: '0.5rem',
        "& svg": {
            fontSize: 20,
            color: theme.palette.primary.dark

        }
    }



}));
