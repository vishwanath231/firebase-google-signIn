import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
