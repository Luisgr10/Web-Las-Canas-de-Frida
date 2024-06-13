import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../Map/map.css'


export const Map = () => {
    const position = [28.152608926679324, -15.426859889010542]; // Coordenadas de C. Gordillo, 87, 35009 Las Palmas de Gran Canaria, Las Palmas

    return (
      <div className="map-container">
        <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Las Canas de Frida
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
}

