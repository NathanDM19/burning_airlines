import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap'



const FLIGHT_SERVER_URL = "http://localhost:3000/flights/json.json"

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flights: [],

    }
  }

  componentDidMount() {
    const fetchFlights = () => {
      axios.get(FLIGHT_SERVER_URL)
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
        <Container>
          <Row>
            <Col>
              Date
           </Col>
            <Col>
              Flight
            </Col>
            <Col>
              Departure
           </Col>
            <Col>
              Destiniation
           </Col>
            <Col>
              Airplane
            </Col>
            <Col>
              Seats
            </Col>
            <Col>
              
          </Col>
          </Row>
        </Container>
        <Container>
        {
          this.state.flights.length && this.state.flights.map(flight =>
              <Row key={flight.id}>
                <Col>
                  {flight.date[11] + flight.date[12] + ":" + flight.date[14] + flight.date[15] + " " + "AEST"}<br />{flight.date[8] + flight.date[9] + "/" + flight.date[5] + flight.date[6] + "/" + flight.date[0] + flight.date[1] + flight.date[2] + flight.date[3]}
                </Col>  
                <Col>
                  {flight.id}  
                </Col>
                <Col>
                  {flight.from_airport}
                </Col>
                <Col>
                  {flight.to_airport}
                </Col>
                <Col>
                  {flight.airplane.name}
                </Col>
                <Col>
                  {flight.airplane.rows * flight.airplane.columns}
                </Col>
                <Col>
                  <Button><Link to={`flights/${flight.id}`} className="bookButton">Book a seat</Link></Button>  
                </Col>  
            </Row>
          )}
         </Container> 
      </div>
    )
  }
}

export default Home;