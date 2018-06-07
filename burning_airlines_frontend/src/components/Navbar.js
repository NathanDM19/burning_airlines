import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'


class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    
  }
  logout(name) {
    document.cookie = ""
    // console.log("ran")
    this.props.history.push("/")
  }
  login() {
    document.cookie = "Nathan"
    this.props.history.push("/account")
  }
  render() {
    return (
      <div id="navbar">  
        <Link to="/" class="navLink" class="firstNav">Home</Link>
        <Link to="/search" class="navLink">Search</Link> 
        {document.cookie.length ?
          <Link to="/account" class="navLink">My Account</Link>
          : null}  
        {document.cookie.length ?
            <p onClick={() => this.logout(document.cookie)} className="logout">Logout</p>
            : 
          <p className="logout" onClick={this.login}>Login</p>
          }  
      </div>
    )
  }
}
export default Navbar;