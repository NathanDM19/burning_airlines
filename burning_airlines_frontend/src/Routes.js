import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import Flight from './components/Flight'
import Search from './components/Search'

const Error404 = prop => {
  return <div>NO MATCHING ROUTE! <br/>
    <Link to="/">Home</Link>
  </div>
}

const Routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/flights/:id" component={Flight} />
        <Route path="/search" component={Search} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
)

export default Routes;