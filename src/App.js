import logoblack from './logoblack.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={logoblack} className="App-logo" alt="logoblack" />
        </div>
        <p>
          coming soon...
        </p>
        <a
          className="App-link"
          href="https://github.com/lauriparonen"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </header>
    </div>
  );
}

export default App;
