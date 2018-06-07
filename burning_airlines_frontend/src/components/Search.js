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
    // console.log("componentDidMount worked");
    const fetchflights = () => {
      axios.get(URL).then(response => {
        // console.log(response, response.data);
        //flights is an array of objects
        let flights = response.data
        console.log("All flights: ", flights);
        //map() return a new array of airplane objects
        const airplanes = flights.map(flight => flight.airplane)
        console.log("data.airplane: ", airplanes);
        // const origin = flights.from_airport
        // const destination = flights.to_airport
        const dates = flights.map(flight => flight.date)
        this.setState({ airplanes, flights, dates })

        // debugger;
      })
    }
    fetchflights();
    // setInterval(fetchflights, 1000);
  }

  onFormSubmit(origin, destination) {
    this.setState({ origin, destination })
    console.log("pass origin & destination to App.js :", origin, destination);
  }

  render() {
    const { flights } = this.state;
    // debugger;
    return (
      <div className="App">
        <h2>Virgin Airlines</h2>
        <SearchForm onSubmit={this.onFormSubmit} />
        <FlightsList allFlights={flights} origin={this.state.origin} destination={this.state.destination} />
      </div>
    );
  }
}

export default Search;