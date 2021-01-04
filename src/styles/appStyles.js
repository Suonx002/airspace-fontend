import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    app: {
        opacity: 0,
        animation: '$fadeIn 1s forwards',
        animationDelay: '0.18s'
    }

}));