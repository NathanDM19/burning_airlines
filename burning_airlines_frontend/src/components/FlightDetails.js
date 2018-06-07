import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class FlightDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list } = this.props;
    console.log(list);
    return (

      <Row>
        <Col>{list.date}</Col>
        <Col>{list.id}</Col>
        <Col>{list.from_airport}</Col>
        <Col>{list.to_airport}</Col>
        <Col>{list.airplane.name}</Col>
      </Row>

    )
  }
}


export default FlightDetails