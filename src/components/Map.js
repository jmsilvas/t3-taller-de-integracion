import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
// import "leaflet/dist/leaflet.css"

export default function Map() {
    return (
        <div>
            <div id="mapid">
                <MapContainer center={[25.505, -0.09]} zoom={1} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>  */}
                </MapContainer>
            </div>
        </div>
    )
}
