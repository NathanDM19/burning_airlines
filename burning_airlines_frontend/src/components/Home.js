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
      dateArray: []
    }
  }

  componentDidMount() {
    const fetchFlights = () => {
      axios.get(FLIGHT_SERVER_URL)
        .then(response => {
          this.setState({ flights: response.data })
          let allFlights = [];
          for (let i = 0; i < this.state.flights.length; i++) {
            let tempFlight = this.state.flights[i]
            tempFlight.seatsBooked = 0;
            if (this.state.flights[i].reservations) {
              for (let j = 0; j < this.state.flights[i].reservations.length; j++) {
                tempFlight.seatsBooked += 1;
              }
            }
            allFlights.push(tempFlight)
          }
          this.setState({ flights: allFlights })
          let dateArray = [];
          for (let i = 0; i < this.state.flights.length; i++) {
            dateArray.push(this.state.flights[i].date)
          }
          this.setState({dateArray: dateArray.sort()})
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
              Seats Left
            </Col>
            <Col>
            <Link to="/search" className="searchButton"><Button style={{ backgroundColor: 'blue' }}>Search</Button></Link>
          </Col>
          </Row>
        </Container>
        <Container>
        {
          this.state.dateArray.map(date =>
            this.state.flights.length && this.state.flights.map(flight =>
                date === flight.date? 
              
              <Row key={flight.id}>
                <Col className="flightsDate">
                  {flight.date[11] + flight.date[12] + ":" + flight.date[14] + flight.date[15] + " " + "AEST"}<br />{flight.date[8] + flight.date[9] + "/" + flight.date[5] + flight.date[6] + "/" + flight.date[0] + flight.date[1] + flight.date[2] + flight.date[3]}
                </Col>  
                <Col className="flightsRest">
                  {flight.id}  
                </Col>
                <Col className="flightsRest">
                  {flight.from_airport}
                </Col>
                <Col className="flightsRest">
                  {flight.to_airport}
                </Col>
                <Col className="flightsRest">
                  {flight.airplane.name}
                </Col>
                <Col className="flightsRest">
                  {(flight.airplane.rows * flight.airplane.columns) - flight.seatsBooked}
                </Col>
                <Col className="flightsButton">
                  <Button><Link to={`flights/${flight.id}`} className="bookButton">Book a seat</Link></Button>  
                </Col>  
            </Row> : ""
          ))}
         </Container> 
      </div>
    )
  }
}

export default Home;