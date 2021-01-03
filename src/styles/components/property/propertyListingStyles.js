import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    listingGridContainer: {
        padding: '3.5rem 2.5rem',
        "& .slick-prev:before, .slick-next:before": {
            color: 'pink'
        },
    }
}));