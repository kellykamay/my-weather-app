import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

export interface MapProps {
}

export default function Map ({}: MapProps) {
  return (
    <MapContainer center={[14.39, 120.88]} zoom={5} style={{width: "1000px", height: "500px"}}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[14.39, 120.88]} />
    
    </MapContainer>

  );
}
