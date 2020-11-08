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
    }
})