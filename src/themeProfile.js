import {createMuiTheme} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan'
import { teal, grey, pink, yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
    
    palette: {
        primary: {
            main : "#083C54",

            light: yellow[50],

            // dark: 
            // contrastText: 
        },
        secondary: {
            main: grey[50],
            
        },
    }

})

export default theme;