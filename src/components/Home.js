import React from 'react';
import '../App.css';
import logodel2 from '../logodel2.jpeg';
import {Link} from 'react-router-dom'

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
          <Link className="App-link" to="/Ingles">
            English 
          </Link>
          <Link className="App-link" to="/Español">
            Español
          </Link>
        </div>
        
      </div>
    )
}

export default Home;
