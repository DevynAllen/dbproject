import React from 'react';
import Tables from './pages/Tables'
import Queries from './pages/Queries'

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact={true} path="/" component={Tables} />
          <Route exact={true} path="/Queries" component={Queries} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
