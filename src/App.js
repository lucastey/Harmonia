import pngtree from './pngtree.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pngtree} className="App-logo" alt="logo" />
        <p className= "App-title">
          Harmonia
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
