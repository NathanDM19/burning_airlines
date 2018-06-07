import React, { Component } from 'react'
import FlightDetails from "./FlightDetails"
import { Container, Row, Col } from 'reactstrap';

class FlightsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allFlights, origin, destination } = this.props
    let results = [];

    return (
      <div>
        <h4>Flight Search Results</h4>
        {allFlights.map(list => list.from_airport === origin && list.to_airport === destination ?
          results.push(list) : "")}

        <Container>
          {results.length ?
            <Row>
              <Col>Date</Col>
              <Col>Flight</Col>
              <Col>From</Col>
              <Col>To</Col>
              <Col>Plane</Col>
            </Row> : ""}
          {results.map(results => (<FlightDetails list={results} />))}
        </Container>
      </div>

    )
  }
}


// const FlightsList = (allFlights, origin, destination) => {
//   console.log("FlightsList.js: ", allFlights);
//   return (
//   )
// }
export default FlightsList;