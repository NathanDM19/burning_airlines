import React, { Component } from 'react'
import FlightDetails from "./FlightDetails"
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class FlightsList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // console.log(this.props, "PROPSSSSSSSS")
    const { allFlights, origin, destination } = this.props
    // console.log(allFlights)
    let results = [];
    
    destination === "" || destination === "Select destination" ?
      allFlights.map(list => list.from_airport === origin ?
      results.push(list): null)
      :
      origin === "" || origin === "Select departure" ?
        allFlights.map(list => list.to_airport === destination ?
          results.push(list): null)  
          :
          allFlights.map(list => list.from_airport === origin && list.to_airport === destination ?
            results.push(list)
            :
            null
          )
    return (
      
      <div>
        <h4>Flight Search Results</h4>
        <Container>
          {results.length ?
            <Row>
              <Col>Date</Col>
              <Col>Flight #</Col>
              <Col>Departure</Col>
              <Col>Destination</Col>
              <Col>Airplane</Col>
              <Col>Seats Left</Col>
              <Col><Link to="/"><Button style={{ backgroundColor: "blue", position: "relative", top: "-5px" }}>All Flights</Button></Link></Col>
            </Row> : ""}
          {results.map((results, i) => (<FlightDetails key={results+i} list={results} num={i} />))}
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