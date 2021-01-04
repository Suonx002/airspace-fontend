import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    dialog: {
        paddingTop: '2rem',
        paddingBottom: '2rem',
        "& .MuiDialog-paperWidthSm": {
            width: '100%',
            maxWidth: 450
        },
        "& .MuiDialog-paper": {
            margin: 16
        }
    },
    dialogTitle: {
        textTransform: 'uppercase',
        color: theme.palette.primary.main,
        textAlign: 'center',
        paddingTop: '0.75rem !important',
        paddingBottom: '0.75rem !important',

    },
    form: {
        width: '100%',
    },
    fieldBox: {
        "& > *": {
            width: '100%'
        }
    },
    btnActions: {
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        "& > *:not(:last-child)": {
            marginRight: '0.75rem',
        }
    },
    cancelBtn: {
        color: theme.palette.common.darkText,
        textTransform: 'none'
    },
    submitBtn: {
        textTransform: 'none'
    },
    loadingSpinner: {
        width: '25px !important',
        height: '25px !important',
    }

}));