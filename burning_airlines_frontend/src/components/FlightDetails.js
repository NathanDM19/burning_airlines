import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class FlightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { list } = this.props;
    console.log(this.props)
    return (
      this.props.num % 2 === 1 ?
      <Row className="row1 rowList">
        <Col className="flightsRest">{list.date[11] + list.date[12] + ":" + list.date[14] + list.date[15] + " " + "AEST"}<br />{list.date[8] + list.date[9] + "/" + list.date[5] + list.date[6] + "/" + list.date[0] + list.date[1] + list.date[2] + list.date[3]}</Col>
        <Col className="flightsRest">{list.id}</Col>
        <Col className="flightsRest">{list.from_airport}</Col>
        <Col className="flightsRest">{list.to_airport}</Col>
        <Col className="flightsRest">{list.airplane.name}</Col>
        <Col className="flightsRest">{(list.airplane.rows * list.airplane.columns) - list.reservationsTotal}</Col>
          <Col className="flightsButton"><Link to={`flights/${list.id}`} className="bookButton"><Button color="success">Book a seat</Button></Link>  </Col>
        </Row>
        :
        <Row className="row2 rowList">
          <Col className="flightsRest">{list.date[11] + list.date[12] + ":" + list.date[14] + list.date[15] + " " + "AEST"}<br />{list.date[8] + list.date[9] + "/" + list.date[5] + list.date[6] + "/" + list.date[0] + list.date[1] + list.date[2] + list.date[3]}</Col>
          <Col className="flightsRest">{list.id}</Col>
          <Col className="flightsRest">{list.from_airport}</Col>
          <Col className="flightsRest">{list.to_airport}</Col>
          <Col className="flightsRest">{list.airplane.name}</Col>
          <Col className="flightsRest">{(list.airplane.rows * list.airplane.columns) - list.reservationsTotal}</Col>
          <Col className="flightsButton"><Link to={`flights/${list.id}`} className="bookButton"><Button color="success">Book a seat</Button></Link>  </Col>
        </Row>  

    )
  }
}


export default FlightDetails