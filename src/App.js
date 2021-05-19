import './App.css';
import React, {useEffect, useState} from "react";
import Map from './components/Map';
import Chat from './components/Chat';
import {Container, Row, Col} from 'reactstrap';
import { io } from "socket.io-client";


function App() {
  const [flights, setFlights] = useState([]);
  const [positions, setPosition] = useState({});

  // function getRandomColor() {
  //     var letters = '0123456789ABCDEF';
  //     var color = '#';
  //     for (var i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   }

  useEffect(() => {
    

    const socket = io("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl", {
      path: "/flights"});
      socket.emit("FLIGHTS")
      // socket.onAny((event, ...args) => {
      //   console.log(`got ${event}`);
      // });
      socket.on("FLIGHTS", (payload) => {
        for (let index = 0; index < payload.length; index++) {
          payload[index]["color"]='blue';
          
        }
        setFlights(payload)
});
      socket.on("POSITION", (payload) => {
        positions[payload.code] = payload.position
        setPosition(positions)
      });
    },[flights, positions])
  
  return (
    <Container className="main-container">
      <Row>
        <Col md="8" sm="12">
          <Map flights={flights} positions={positions}/>
        </Col>
        <Col md="4" sm="12" >
          <Chat />
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
