import logoblack from './logoblack.svg';
import react from 'react';
import './App.css';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import TweetInputForm from './TweetInputForm';
import MenuBar from './MenuBar';
import theme from './Theme';
import AboutModal from './AboutModal';
import InstructionsModal from './InstructionsModal';
import DraftsModal from './DraftsModal';
// import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [drafts, setDrafts] = useState([]);
  const [isDraftsModalOpen, setIsDraftsModalOpen] = useState(false);

  const handleSaveDraft = (text) => {
    setDrafts([...drafts, text]);
  };

  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <TweetInputForm 
      saveDraft={handleSaveDraft}
      setDrafts={setDrafts}
      setIsDraftsModalOpen={setIsDraftsModalOpen}
      /> 
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
