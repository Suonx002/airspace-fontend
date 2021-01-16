import { createMuiTheme } from '@material-ui/core/styles';




const primaryColor = '#132e46';
const secondaryColor = '#8F45AD';
const tertiaryColor = '#2CB064';
const darkText = '#292929';
const lighterColor = '#f8f8f8';

const defaultTheme = createMuiTheme();

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
            [defaultTheme.breakpoints.down(992)]: {
                fontSize: '3rem',
            },
            [defaultTheme.breakpoints.down(768)]: {
                fontSize: '2.5rem',
            },
            [defaultTheme.breakpoints.down(500)]: {
                fontSize: '2rem',
            },
        },
        h2: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '2.5rem',
            [defaultTheme.breakpoints.down(992)]: {
                fontSize: '2.0rem',
            },
            [defaultTheme.breakpoints.down(768)]: {
                fontSize: '1.75rem',
            },
            [defaultTheme.breakpoints.down(500)]: {
                fontSize: '1.5rem',
            },
        },
        h3: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '2rem',
            [defaultTheme.breakpoints.down(992)]: {
                fontSize: '1.6rem',
            },
            [defaultTheme.breakpoints.down(768)]: {
                fontSize: '1.4rem',
            },
            [defaultTheme.breakpoints.down(500)]: {
                fontSize: '1.2rem',
            },
        },
        h4: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '1.85rem',
            [defaultTheme.breakpoints.down(992)]: {
                fontSize: '1.5rem',
            },
            [defaultTheme.breakpoints.down(768)]: {
                fontSize: '1.3rem',
            },
            [defaultTheme.breakpoints.down(500)]: {
                fontSize: '1.1rem',
            },
        },
        h5: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '1.5rem',
            [defaultTheme.breakpoints.down(992)]: {
                fontSize: '1.3rem',
            },
            [defaultTheme.breakpoints.down(768)]: {
                fontSize: '1.1rem',
            },
            [defaultTheme.breakpoints.down(500)]: {
                fontSize: '1rem',
            },
        },
        h6: {
            fontFamily: 'Cabin, sans-serif',
            fontSize: '1.3rem',
            [defaultTheme.breakpoints.down(992)]: {
                fontSize: '1.1rem',
            },
            [defaultTheme.breakpoints.down(768)]: {
                fontSize: '1rem',
            },
            [defaultTheme.breakpoints.down(500)]: {
                fontSize: '0.9rem',
            },
        },
        body1: {
            fontSize: '1rem',
            fontStyle: 'italic',
            color: primaryColor,

            [defaultTheme.breakpoints.down(768)]: {
                fontSize: '0.9rem',
            },
            [defaultTheme.breakpoints.down(500)]: {
                fontSize: '0.8rem',
            },
        }

    }
});