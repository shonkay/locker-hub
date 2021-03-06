import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/home';

function App(props: any) {
  return (
      <Route path="/" exact>
        <Home {...props} />
      </Route>
  );
}

export default App;
