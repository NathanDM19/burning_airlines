import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap'

const SERVER_URL = "http://localhost:3000/flights/json"


class Flight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flight: {},
      rows: [],
      columns: [],
      letters: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
      seats: [[]],
      bookRow: 0,
      bookColumn: 0,
      user_id: 30
    }
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
            tempSeats[i] = [];
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
            tempRow.push(tempRow.length+1)
          }
          for (let i = 0; i < this.state.flight.airplane.columns; i++) {
            tempCol[i] = i + 1;
          }
            this.setState({ rows: tempRow, columns: tempCol, seats: tempSeats })
          });
        };
        fetchFlights();
    setInterval(fetchFlights, 1000)
  }

  bookSeat(row, column) {
    if (this.state.rows[this.state.rows.length - 1] / 2 > row) {
      axios.post(SERVER_URL, { row: row, column: column, user_id: this.state.user_id, flight_id: this.state.flight.id })
    } else {
      axios.post(SERVER_URL, { row: row-1, column: column, user_id: this.state.user_id, flight_id: this.state.flight.id })      
    }
  }

  render() {
    return (
      <div>
        <h1>Flight {this.state.flight.id}</h1>
        {this.state.flight.date ?
        <div>  
          <p className="flightDate">
              {this.state.flight.date[11] + this.state.flight.date[12] + ":" + this.state.flight.date[14] + this.state.flight.date[15] + " " + "AEST"}</p><p className="inLine">Departing From: {this.state.flight.from_airport}</p><br /><p className="flightDate">{this.state.flight.date[8] + this.state.flight.date[9] + "/" + this.state.flight.date[5] + this.state.flight.date[6] + "/" + this.state.flight.date[0] + this.state.flight.date[1] + this.state.flight.date[2] + this.state.flight.date[3]}
              <p className="inLine">Landing At: {this.state.flight.to_airport}</p>
          </p></div> : ""}
        <div className="seatsContainer" style={{width: `${this.state.rows[this.state.rows.length-1]*110}px` }}>
        <Container >
          <Row className="seatRow">
            <Col sm="">
            </Col>  
            {this.state.rows.map(row => 
              Math.floor(this.state.rows[this.state.rows.length - 1] / 2) === row - 1 ?
                <Col sm="">
                </Col>
                :
                <Col sm="" className="lettersRow">
                  {this.state.letters[row]}
                </Col>  
            )}
            </Row>
          {this.state.columns.map(column => 
          <Row className="seatRow">  
            <Col className="seatNumbers" sm="">
              {column}
            </Col>
              {this.state.rows.map(row =>
                Math.floor(this.state.rows[this.state.rows.length - 1] / 2) === row - 1 ?
                  <Col sm="">
                  </Col>
                  :
                  Math.floor(this.state.rows[this.state.rows.length - 1] / 2) > row - 1 ?
                    this.state.seats[row - 1][column - 1] ?
                      <Col className="seatTaken" sm="">
                        {this.state.seats[row - 1][column - 1]}
                      </Col>
                      :
                        <Col className="seatFree" sm="">
                        <Button onClick={() => this.bookSeat(row, column)}>
                          Free
                        </Button>
                      </Col> 
                    :
                    this.state.seats[row - 2][column - 1] ?
                      <Col className="seatTaken" sm="">
                        {this.state.seats[row - 2][column - 1]}
                      </Col>
                      :
                      <Col className="seatFree" sm="">
                        <Button onClick={() => this.bookSeat(row, column)}>
                          Free
                        </Button>
                      </Col>
              )}
            </Row>  
          )}    
          </Container>  
        </div>
        <Link to="/" className="backButton"><Button style={{ backgroundColor: "blue", marginLeft: "44.7%", marginTop: "2%" }}>Back to all flights</Button></Link>
      </div>  
    )
  }
}

export default Flight;
