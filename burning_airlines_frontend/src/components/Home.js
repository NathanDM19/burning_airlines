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
    const fetchSecrets = () => {
      axios.get(SERVER_URL)
        .then(response => {
          this.setState({ flights: response.data })
        });
    };
    fetchSecrets();
    setInterval(fetchSecrets, 1000)
  }

  render() {
    return (
      <div>
        <h1>All Flights</h1>
        {
          this.state.flights.length && this.state.flights.map(flight =>
            <div>
              <p key={flight.id}>{flight.date}</p>
              <p key={flight.id}>From: {flight.from_airport}</p>
              <p key={flight.id}>To: {flight.to_airport}</p>
              <p key={flight.id}>Airplane ID: {flight.airplane_id}</p>
              <Link to={`/flights/${flight.id}`}>Book your seat</Link>
              <hr/>
            </div>)
         }
      </div>
    )
  }
}

export default Home;