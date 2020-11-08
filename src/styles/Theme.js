import { createMuiTheme } from '@material-ui/core/styles'




const primaryColor = '#132e46';
const secondaryColor = '#27ae60'
const tertiaryColor = '#8e44ad';

export default createMuiTheme({
    palette: {
        common: {
            primaryColor,
            secondaryColor,
            tertiaryColor
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
            fontFamily: 'Cabin, sans-serif'
        },
        h2: {
            fontFamily: 'Cabin, sans-serif'
        },
        h3: {
            fontFamily: 'Cabin, sans-serif'
        },
        h4: {
            fontFamily: 'Cabin, sans-serif'
        },
        h5: {
            fontFamily: 'Cabin, sans-serif'
        },
        h6: {
            fontFamily: 'Cabin, sans-serif'
        },

    }
})