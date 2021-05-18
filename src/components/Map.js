import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
// import "leaflet/dist/leaflet.css"

export default function Map(props) {
    
  
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
                            {props.positions[flight.code]? props.positions[flight.code]: "no hay avance"}
                        </Popup>
                    </Marker> 
                    <Marker key={flight.code+"dest"} position={[flight.destination[0], flight.destination[1]]}>
                        <Popup>
                            Destino Vuelo {flight.code}
                            {props.positions[flight.code]? props.positions[flight.code].position: "no hay avance"}
                        </Popup>
                    </Marker>  */}
                    <Polyline pathOptions={{color: flight.color}} positions={[flight.origin, flight.destination]}>
                        <Popup>{flight.code}</Popup>
                    </Polyline>
                    {props.positions[flight.code]&&   <Marker key={flight.code+"loc"} position={[props.positions[flight.code][0],props.positions[flight.code][1]]}>
                        <Popup>
                            Posicion actual Vuelo {flight.code}
                            {props.positions[flight.code]? props.positions[flight.code].position: "no hay avance"}
                        </Popup>
                    </Marker> }
                    </>))}
                   
                </MapContainer>
            </div>
        </div>
    )
}
