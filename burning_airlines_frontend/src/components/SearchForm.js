import React, { Component } from 'react';
// import {get} from "axios";
import '../App.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: ""
    }
    this.originHandler = this.originHandler.bind(this);
    this.destinationHandler = this.destinationHandler.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
  }

  originHandler(e) {
    // console.log(e.target.value);
    this.setState({ origin: e.target.value })
  }

  destinationHandler(e) {
    // console.log(e.target.value);
    this.setState({ destination: e.target.value })
  }

  submitSearch(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.origin, this.state.destination)
    // console.log(e.target.value);
    // alert('submitted')
  }

  render() {
    const airports = ["Sydney Airport", "Melbourne Airport", "Brisbane Airport", "Gold Coast Airport", "Adelaide Airport", "Hobart International Airport", "Perth Airport"]
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <label>Search Flights</label>
          <br />
          <select onChange={this.originHandler}>
            <option>Select departure</option>
            {airports.map(airport => <option key={airport}>{airport}</option>)}
          </select>
          <select onChange={this.destinationHandler}>
            <option>Select destination</option>
            {airports.map(airport => <option key={airport + "to"}>{airport}</option>)}
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SearchForm;