import { useState } from 'react'
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import useSWR from "swr";
import './App.css';

const fetcher = (url) => axios.get(url).then((res) => res.data);


function App() {

  const center = [0.3556, 37.5833];
  const zoom = 7;
  const { data, error } = useSWR("http://localhost:8000/api/facilities/", fetcher);
  const facilities = data && !error ? data : {};
  const [activeFacility, setActiveFacility] = useState(null)

  if (error) {
    return <Alert variant="danger">Failure occured when Fetching Facilities!</Alert>;
  }

  if (!data) {
    return (
      <Spinner
        animation="border"
        variant="success"
        role="status"
        style={{
          width: "200px",
          height: "200px",
          marginTop: "15%",
          marginLeft: "45%",
          display: "block",
        }}
      />
    );
  }

  return (
    <>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {
          facilities.features.map((facility) => (
            <Marker
              key={facility.properties.name}
              position={[facility.geometry.coordinates[1], facility.geometry.coordinates[0]]}
              onClick={() => {
                setActiveFacility(facility)
              }}
            >
              <Popup
                position={[facility.geometry.coordinates[1], facility.geometry.coordinates[0]]}
                onClose={() => setActiveFacility(null)}
              >
                <div>
                  <h6>Name: {facility.properties.name ? facility.properties.name: 'Unamed Facility'}</h6>
                  <h6>Amenity: {facility.properties.amenity}</h6>
                </div>
              </Popup>

            </Marker>
          ))
        }
      </MapContainer>
    </>
  )
}

export default App
