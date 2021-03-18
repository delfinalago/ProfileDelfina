import {createMuiTheme} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan'
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    
    palette: {
        primary: {
            main : cyan[400]
        },
        secondary: {
            main: grey[50]
        },
    }

})

export default theme;