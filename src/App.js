import React from 'react';
import Movies from './componentes/Movies';
import styles from './App.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import { TiHomeOutline} from "react-icons/ti";



function App() {
  return (
    
    <Router>
      <header className='box'>
        
        <Link to="/"> <h1  className={styles.title}>Home <TiHomeOutline /> </h1> </Link>
        <div>
        </div>
    
      </header>

      <main>
      <Switch>
          <Route exact path="/movies/:movieId"><MovieDetails /></Route>
          <Route path="/"><LandingPage /></Route>
          <Route path="/upcoming">pedro</Route>
        


        </Switch>
      </main>
      
      </Router>
    
  );
}

export default App;
