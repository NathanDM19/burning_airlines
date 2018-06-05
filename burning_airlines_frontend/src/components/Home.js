import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const SERVER_URL = "http://localhost:3000/flights/json.json"

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flights: []

    }
  }

  componentDidMount() {
    const fetchFlights = () => {
      axios.get(SERVER_URL)
        .then(response => {
          this.setState({ flights: response.data })
        });
    };
    fetchFlights();
    setInterval(fetchFlights, 1000)
  }

  render() {
    return (
      <div>
        <h1>All Flights</h1>
        {
          this.state.flights.length && this.state.flights.map(flight =>
            <div key={flight.id}>
              <p>{flight.date}</p>
              <p>From: {flight.from_airport}</p>
              <p>To: {flight.to_airport}</p>
              <p>Airplane ID: {flight.airplane_id}</p>
              <Link to={`/flights/${flight.id}`} ola="olaaaa">Book your seat</Link>
              <hr />
            </div>)
         }
      </div>
    )
  }
}

export default Home;