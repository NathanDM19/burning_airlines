import React, { Component } from 'react';
import axios from "axios";
import { Container, Row, Col, Button } from 'reactstrap'


//document.cookie

const URL = "http://localhost:3000/flights/jsonReservations";

class Account extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reservations: [],
      name: document.cookie
    }
  }

  componentDidMount() {
    const fetchReservations = () => {
      axios.get(URL).then(response => {
        this.setState({reservations: response.data})
      })
    }
    fetchReservations();
  }
  render() {
    return (
      <div>
        <h1>My Reservations</h1>
        <Container>
          <Row className="rowList">
            <Col>
            Date
            </Col>
            <Col>
            Flight #  
            </Col>
            <Col>
            Departure  
            </Col>
            <Col>
            Destination  
            </Col>  
            <Col>
            Airplane  
            </Col>  
          </Row>
        {this.state.reservations.map((reservation, i) =>
            reservation.user.name === this.state.name ?
          i % 2 === 1 ?    
            <Row className="row1 rowList">
                <Col className="flightsRest">
                  {reservation.flight.date[11] + reservation.flight.date[12] + ":" + reservation.flight.date[14] + reservation.flight.date[15] + " " + "AEST"}<br/>{reservation.flight.date[8] + reservation.flight.date[9] + "/" + reservation.flight.date[5] + reservation.flight.date[6] + "/" + reservation.flight.date[0] + reservation.flight.date[1] + reservation.flight.date[2] + reservation.flight.date[3]}
                </Col>  
                <Col className="flightsRest">{reservation.flight.id}</Col>
                <Col className="flightsRest">{reservation.flight.from_airport}</Col>
                <Col className="flightsRest">{reservation.flight.to_airport}</Col>
                <Col className="flightsRest">{reservation.flight.airplane.name}</Col>
                </Row>
                :
                <Row className="row2 rowList">
                  <Col className="flightsRest">
                    {reservation.flight.date[11] + reservation.flight.date[12] + ":" + reservation.flight.date[14] + reservation.flight.date[15] + " " + "AEST"}<br />{reservation.flight.date[8] + reservation.flight.date[9] + "/" + reservation.flight.date[5] + reservation.flight.date[6] + "/" + reservation.flight.date[0] + reservation.flight.date[1] + reservation.flight.date[2] + reservation.flight.date[3]}
                  </Col>
                  <Col className="flightsRest">{reservation.flight.id}</Col>
                  <Col className="flightsRest">{reservation.flight.from_airport}</Col>
                  <Col className="flightsRest">{reservation.flight.to_airport}</Col>
                  <Col className="flightsRest">{reservation.flight.airplane.name}</Col>
                  </Row>
            : null
          )}
        </Container>  
      </div>
    )
  }
}

export default Account;