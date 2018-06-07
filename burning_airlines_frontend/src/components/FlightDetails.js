import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class FlightDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list } = this.props;
    return (

      <Row>
        <Col>{list.date[11] + list.date[12] + ":" + list.date[14] + list.date[15] + " " + "AEST"}<br />{list.date[8] + list.date[9] + "/" + list.date[5] + list.date[6] + "/" + list.date[0] + list.date[1] + list.date[2] + list.date[3]}</Col>
        <Col>{list.id}</Col>
        <Col>{list.from_airport}</Col>
        <Col>{list.to_airport}</Col>
        <Col>{list.airplane.name}</Col>
        <Col>{(list.airplane.rows * list.airplane.columns) - list.reservationsTotal}</Col>
        <Col><Link to={`flights/${list.id}`} className="bookButton"><Button>Book a seat</Button></Link>  </Col>
      </Row>

    )
  }
}


export default FlightDetails