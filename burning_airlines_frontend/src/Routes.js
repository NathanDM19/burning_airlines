import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import Flight from './components/Flight'
import Search from './components/Search'
import Navbar from './components/Navbar'
import Account from './components/Account'

const Routes = (
  <Router>
    <div>
      <Route component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route path="/flights/:id" component={Flight} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/account" component={Account} />
    </div>
  </Router>
)

export default Routes;