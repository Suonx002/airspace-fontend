import { ModeCommentOutlined } from '@material-ui/icons';

const capitalizeString = str => {

    if (!str) {
        return '';
    } else {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

};

export default capitalizeString;