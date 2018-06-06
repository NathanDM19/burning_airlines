import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap'

const SERVER_URL = "http://localhost:3000/flights/json.json"


class Flight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flight: {},
      row: [],
      column: []
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
          
          let tempRow = [];
          let tempCol = [];
          for (let i = 0; i < this.state.flight.airplane.rows; i++) {
            tempRow[i] = " ";
          }
          for (let i = 0; i < this.state.flight.airplane.columns; i++) {
            tempCol[i] = " ";
          }
          this.setState({row: tempRow, column: tempCol})
              });
          };
          fetchFlights();
    // setInterval(fetchFlights, 1000)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              
            </Col>  
          </Row>  
        </Container>
      </div>  
    )
  }
}

export default Flight;