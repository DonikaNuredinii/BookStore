import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapComponent() {
  const position = [42.6629, 21.1655]; 
  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & CartoDB'
      />
      <Marker position={position}>
        <Popup>
          Our Location <br /> Visit us anytime.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
