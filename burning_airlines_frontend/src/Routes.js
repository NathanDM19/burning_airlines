import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Home from './components/Home'

const Error404 = prop => {
  return <div>NO MATCHING ROUTE!</div>
}

const Routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
    </div>
  </Router>
)

export default Routes;