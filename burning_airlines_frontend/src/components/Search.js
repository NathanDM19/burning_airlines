import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
import SearchForm from './SearchForm'
import FlightsList from './FlightsList'

const URL = "http://localhost:3000/flights/json";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      origin: "",
      destination: "",
      flights: [],
      airplanes: [],
      dates: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  componentDidMount() {
    const fetchflights = () => {
      axios.get(URL).then(response => {
        //flights is an array of objects
        let flights = response.data
        //map() return a new array of airplane objects
        const airplanes = flights.map(flight => flight.airplane)
        const dates = flights.map(flight => flight.date)
        this.setState({ airplanes, flights, dates })

        // debugger;
      })
    }
    fetchflights();
  }

  onFormSubmit(origin, destination) {
    this.setState({ origin, destination })
  }

  render() {
    const { flights } = this.state;
    for (let i = 0; i < flights.length; i++) {
      let reservations = 0;
      for (let j = 0; j < flights[i].reservations.length; j++) {
        reservations++;
      }
      console.log(reservations)
      flights[i].reservationsTotal = reservations;
    }
    return (
      <div className="App">
        <h2>Virgin Airlines</h2>
        <SearchForm key="SearchForm" onSubmit={this.onFormSubmit} />
        <FlightsList key="FlightsList" allFlights={flights} origin={this.state.origin} destination={this.state.destination} />
      </div>
    );
  }
}

export default Search;