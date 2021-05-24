import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
import {socket} from '../services/socket'

export default function Map(props) {
    const [positions, setPosition] = useState({});


    socket.on("POSITION", (payload) => {
        positions[payload.code] = payload.position
        // console.log(payload.position);
        setPosition(positions)
      });

  
    return (
        <div>
            <div id="mapid">
                <MapContainer center={[-38.505, -65.09]} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {props.flights.map((flight) => ( 
                        <>
                    {/* <Marker key={flight.code+"ori"} position={[flight.origin[0], flight.origin[1]]}>
                        <Popup>
                            Origen Vuelo {flight.code}
                            {positions[flight.code]? positions[flight.code]: "no hay avance"}
                        </Popup>
                    </Marker> 
                    <Marker key={flight.code+"dest"} position={[flight.destination[0], flight.destination[1]]}>
                        <Popup>
                            Destino Vuelo {flight.code}
                            {positions[flight.code]? positions[flight.code].position: "no hay avance"}
                        </Popup>
                    </Marker>  */}
                    <Polyline pathOptions={{color: flight.color}} positions={[flight.origin, flight.destination]}>
                        <Popup>{flight.code}</Popup>
                    </Polyline>
                    {positions[flight.code]&&   <Marker key={flight.code+"loc"} position={[positions[flight.code][0],positions[flight.code][1]]}>
                        <Popup>
                            Posicion actual Vuelo {flight.code}
                            {positions[flight.code]? positions[flight.code].position: "no hay avance"}
                        </Popup>
                    </Marker> }
                    </>))}
                   
                </MapContainer>
            </div>
        </div>
    )
}
