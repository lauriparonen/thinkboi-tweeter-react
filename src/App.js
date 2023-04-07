import logoblack from './logoblack.svg';
import react from 'react';
import './App.css';
import TweetInputForm from './TweetInputForm';
import MenuBar from './MenuBar';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#b4d9ef',
    },
    secondary: {
      main: '#b4d9ef',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <TweetInputForm /> 
      <MenuBar /> 
      
      <header className="App-header">
        <div className="App-logo">
          <img src={logoblack} className="App-logo" alt="logoblack" />
        </div>
        <p>
          coming soon...
        </p>
        <a
          className="App-link"
          href="https://github.com/lauriparonen/thinkboi-tweeter-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </header>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
