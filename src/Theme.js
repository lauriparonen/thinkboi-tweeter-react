import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b4d9ef',
    },
    secondary: {
      main: '#b4d9ef',
    },
    backgroundColor: {
      default: '#000000',

  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
}

});

export default theme;