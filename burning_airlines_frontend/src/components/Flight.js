import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = "http://localhost:3000/flights/json.json"


class Flight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flight: {}
    }
    // console.log(this.props.match.params.id)
    console.log(this.props.match.params.id)
  }

  componentDidMount() {
    const fetchFlights = () => {
      axios.get(SERVER_URL)
        .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].id.toString() === this.props.match.params.id) {
              this.setState({flight: response.data[i]})
            }
          }
        });
    };
    fetchFlights();
    // setInterval(fetchFlights, 1000)
  }

  render() {
    return (
      <div key={this.state.flight.id}>
        <p>Flight Name: {this.state.flight.id}</p>
        <p>Departing From: {this.state.flight.from_airport}</p>
        <p>Landing at: {this.state.flight.to_airport}</p>
        <p>Departure time: {this.state.flight.date}</p>
      </div>
    )
  }
}

export default Flight;