import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[-5.9231, -35.2677]}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "50vh", width: "50vw", margin: "0 auto" }}
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FicmllbG5zZCIsImEiOiJja296NGxyeDIwZnNzMnB0YWJjZjY4N282In0.R6cP6EYyGDCHBWfdpsRkhw" />
      <Marker position={[-5.9231, -35.2677]} draggable={true} >
        <Popup>Hey ! I live here</Popup>
      </Marker>
      <Marker position={[-5.9000, -35.2677]} draggable={true} >
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
};


export default Map;
