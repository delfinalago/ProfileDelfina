import logodel2 from './logodel2.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logodel2} className="App-logo" alt="logo" />
        <p className="Nombre">
          Delfina Lago
        </p>
        </header>
      <div className="App-orden">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          English 
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Español
        </a>
      </div>
      
    </div>
  );
}

export default App;
