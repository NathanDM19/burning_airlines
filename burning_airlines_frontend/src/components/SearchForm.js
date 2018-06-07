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
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <label>Search Flights</label>
          <br />
          <select onChange={this.originHandler}>
            <option>Select departure</option>
            <option>Sydney</option>
            <option>Melbourne</option>
            <option>Toronto</option>
          </select>
          <select onChange={this.destinationHandler}>
            <option>Select destination</option>
            <option>Melbourne</option>
            <option>Hobart</option>
            <option>Singapore</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SearchForm;