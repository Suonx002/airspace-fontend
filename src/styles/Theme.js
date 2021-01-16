import { createMuiTheme } from '@material-ui/core/styles';




const primaryColor = '#132e46';
const secondaryColor = '#8F45AD';
const tertiaryColor = '#2CB064';
const darkText = '#292929';
const lighterColor = '#f8f8f8';



export default createMuiTheme({
    palette: {
        common: {
            primaryColor,
            secondaryColor,
            tertiaryColor,
            darkText,
            lighterColor
        },
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    },
    typography: {
        h1: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '3.5rem',
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '2rem',
        },
        h4: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '1.85rem',
        },
        h5: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '1.5rem',
        },
        h6: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '1.3rem',
        },
        body1: {
            fontSize: '1rem',
            fontStyle: 'italic',
            color: primaryColor
        }

    }
});