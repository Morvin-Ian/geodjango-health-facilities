// import { useState } from 'react'
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import useSWR from "swr";
import './App.css';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const icon = new Icon({
  iconUrl:"marker.png",
  iconSize:[30, 50],
  iconAnchor:[25, 65],
  shadowAnchor:[-3, -75]
})

const fetchFacilities = (url) => {
  axios.get(url)
  .then((res) => {
    return res.data
  })
}

function App() {

  const center = [0.3556, 37.5833];
  const zoom = 7;
  const { data, error } = useSWR("http://localhost:8000/api/facilities/", fetcher);
  const facilities = data && !error ? data : {};

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
          marginLeft:"45%",
          display: "block",
        }}
      />
    );
  }

  console.log(data)


  return (
    <>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
      </MapContainer>
    </>
  )
}

export default App
