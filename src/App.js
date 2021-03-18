import Routes from'./Routes';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themeProfile'

function App() {

  return (
  <ThemeProvider theme={theme}>
    <Routes/>
  </ThemeProvider>
  );
}

export default App;
