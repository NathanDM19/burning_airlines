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
      rows: [],
      columns: [],
      reservations: [],
      letters: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      seats: [[]]
    }
    // console.log(this.props.match.params.id)
    // console.log(this.props.match.params.id)
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
          let tempReservations = [];
          let tempSeats = [];
          for (let i = 0; i < this.state.flight.airplane.rows; i++) {
            tempRow[i] = i + 1;
            tempSeats[i] = []
            for (let j = 0; j < this.state.flight.airplane.columns; j++) {
              for (let k = 0; k < this.state.flight.reservations.length; k++) {
                if (this.state.flight.reservations[k].row === i+1 && this.state.flight.reservations[k].column === j+1) {
                  tempSeats[i][j] = this.state.flight.reservations[k].user.name
                  break;
                } else {
                  tempSeats[i][j] = ""
                }
              }
            }
          }
          // console.log(seats)
          for (let i = 0; i < this.state.flight.airplane.columns; i++) {
            tempCol[i] = i + 1;
          }
          // console.log(seats)
          // for (let i = 0; i < this.state.flight.reservations.length; i++) {
          //   console.log("ran")
          //   tempReservations.push([this.state.flight.reservations[i].row, this.state.flight.reservations[i].column])
          // }
          this.setState({ rows: tempRow, columns: tempCol, seats: tempSeats })
              });
          };
          fetchFlights();
          setInterval(fetchFlights, 1000)
  }

  bookSeat() {
    console.log("Clicked")
  }

  render() {
    return (
      <div>
        <Container className="seatsContainer">
          <Row>
            <Col sm="1">
            </Col>  
            {this.state.rows.map(row => 
              <Col sm="1" className="lettersRow">
              {this.state.letters[row]}
              </Col>  
            )}
            </Row>
          {this.state.columns.map(column => 
          <Row>  
            <Col className="seatNumbers" sm="1">
              {column}
            </Col> 
            {this.state.rows.map(row => 
                this.state.seats[row - 1][column - 1] ? <Col className="seatTaken" sm="1">{this.state.seats[row - 1][column - 1]}</Col> : <Col onClick={this.bookSeat} className="seatFree" sm="1"><Button>Free</Button></Col>
            )}
            </Row>  
          )}    
        </Container>
      </div>  
    )
  }
}

export default Flight;