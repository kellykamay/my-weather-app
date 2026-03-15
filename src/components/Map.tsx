import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import type { CoordsType } from '../../types';

export interface MapProps {
    coords: CoordsType,
    onMapClick: (lat: number, lon: number) => void
}

export default function Map ({coords, onMapClick}: MapProps) {
    const {lat, lon} = coords
  return (
    <MapContainer center={[lat, lon]} zoom={5} style={{width: "100%", height: "500px"}}>
        <MapClick onMapClick={onMapClick}/>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} />
    
    </MapContainer>

  );
}

function MapClick({ onMapClick }: {onMapClick: (lat: number, lon: number) => void}) {
    const map = useMap()

    map.on('click', (e) => {
        const {lat, lng} = e.latlng
        map.panTo([lat, lng])
        onMapClick(lat, lng)
    })

    return null
}
