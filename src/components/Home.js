import React from 'react';
import '../App.css';
import logodel2 from '../logodel2.jpeg';

const Home = () => {
    return(
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
            href="./components/Ingles.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            English 
          </a>
          <a
            className="App-link"
            href="./components/Español.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Español
          </a>
        </div>
        
      </div>
    )
}

export default Home;
