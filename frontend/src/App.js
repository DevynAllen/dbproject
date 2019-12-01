import React from 'react';
import Home from './pages/Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path='/' render={() => (
            <div>
              <Home />
            </div>
          )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
