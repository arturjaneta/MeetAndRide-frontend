import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {MapContainer,TileLayer,Marker,Popup,useMapEvents,Circle,LayerGroup} from "react-leaflet"
import SelectInput from "../../components/common/SelectInput/SelectInput";
import Page from "../../components/Page/Page";
import "./AddTripPage.css";
import AddTripForm from "../../components/AddTripForm/AddTripForm"

const LocationMarker = ({setBounds,position,setPosition}) =>  {
  const map = useMapEvents({
    click(e) {
      var latlng = map.mouseEventToLatLng(e.originalEvent)
      console.log(latlng.lat + ', ' + latlng.lng);
      setBounds(latlng)
      setPosition(latlng)
      map.flyTo(latlng, map.getZoom())
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  if(!position)
    map.locate()
  
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const AddTripPage = ({id}) => {
  const [bounds, setBounds] = useState({ lat: 50.288656, lng: 18.677925 });
  const [position, setPosition] = useState(null)
  const [trip,setTrip] = useState(null)

    return (
        <>
          <Page title={id?"Edit trip":"Add trip"}>
              <div id="map">
              <MapContainer
                center={bounds}
                zoom={13}
                scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
    <LocationMarker
    setBounds={setBounds}
    position={position}
    setPosition={setPosition}
    />
  </MapContainer>
                </div>
                <AddTripForm trip={trip?trip:null}/>
          </Page>
        </>
      );


}

export default AddTripPage