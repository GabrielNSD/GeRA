import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  initialLocation: Array<any>;
  polygons?: Array<any>;
}

const Map = (props: MapProps) => {
  let initialLocation: [number, number];
  initialLocation = [
    parseFloat(props.initialLocation[0]),
    parseFloat(props.initialLocation[1]),
  ];

  const testArea = props.polygons ? (props.polygons.length ?  props.polygons[0] : null) : null;

  let polygons = [];
  if (props.polygons && props.polygons.length > 0) {
    polygons = props.polygons //.map((item: any) => item[1]);
  }

  console.log("testArea ", testArea);
  //console.log("polygons ", polygons);

  return (
    <MapContainer
      center={initialLocation}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", margin: "0 auto" }}
      //bounds={}
    >
      {polygons
        ? polygons.map((item: any) => <Polygon key={item[0]} positions={item[1]}></Polygon>)
        : null}
      {/* <Polygon positions={testArea}></Polygon> */}
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FicmllbG5zZCIsImEiOiJja296NGxyeDIwZnNzMnB0YWJjZjY4N282In0.R6cP6EYyGDCHBWfdpsRkhw" />
    </MapContainer>
  );
};

export default Map;
