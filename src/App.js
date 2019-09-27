import React from 'react';
import './Components/Reset.css';
// import logo from './logo.svg';
import './App.css';
// import StateTestMain from './Components/StateTestMain';
// import axios from 'axios';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'

import {BrowserRouter, withRouter} from 'react-router-dom';
import {MovieIndex} from './Route/Main';

const MovieComponent= withRouter(props => <MovieIndex {...props} />);

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MovieComponent />
    </div>
    </BrowserRouter>
  );
}

export default App;

