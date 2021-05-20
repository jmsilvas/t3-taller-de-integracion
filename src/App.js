import './App.css';
import React, {useEffect, useState} from "react";
import Map from './components/Map';
import Chat from './components/Chat';
import {Container, Row, Col} from 'reactstrap';
import {socket} from './services/socket'

socket.emit("FLIGHTS")

function App() {
  const [flights, setFlights] = useState([]);

  // function getRandomColor() {
  //     var letters = '0123456789ABCDEF';
  //     var color = '#';
  //     for (var i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   }  


  
  
    socket.on("FLIGHTS", (payload) => {
      for (let index = 0; index < payload.length; index++) {
        payload[index]["color"]='blue';
        
      }
      setFlights(payload)
      });
   

  
  return (
    <Container className="main-container">
      <Row>
        <Col md="8" sm="12">
          <Map socket={socket}flights={flights} setFlights={setFlights}/>
        </Col>
        <Col md="4" sm="12" >
          <Chat socket={socket}/>
        </Col>
      </Row>
      <Row md="12">
          <h2>Info</h2>
          {flights.length ? flights.map((flight) => (
          <Col key={flight.code}>
            <div>{flight.code}</div>
            <div>{flight.airline}</div>
            {/* <div>[{flight.origin}]</div>
            <div>[{flight.destination}]</div> */}
            <div>{flight.plane}</div>
            <div>{flight.seats}</div>
            {/* <div>{flight.passengers[0].name}</div>    */}
          </Col>)) : ""}
      </Row>

    </Container>
  );
}

export default App;
