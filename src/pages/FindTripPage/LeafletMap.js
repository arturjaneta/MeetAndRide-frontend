import React, {useState,useEffect } from "react";
import { Map, TileLayer,Circle,LayerGroup,useMapEvents,Marker,Popup} from "react-leaflet";
import L from "leaflet";


const LocationMarker = ({position}) =>  {
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const LeafletMap = ({position,selectedLocation,setPosition}) => {
    const [bounds, setBounds] = useState({ lat: 50.288656, lng: 18.677925 });
    const [map,setMap] = useState(null)

    useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              pos => {
                console.log(pos)
                const p = {lat:pos.coords.latitude,lng:pos.coords.longitude}
                console.log(p)
                setPosition(p)
                setBounds(p)
              })
      }
  }, []);

    const saveMap = map => {
        setMap(map)
    };

    const handleMarker = (e) => {
      setBounds(e.latlng)
      setPosition(e.latlng)
    }


    return (
      <Map center={bounds} zoom={13} ref={saveMap} onclick ={handleMarker}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {position ?
    <LayerGroup>
      <Circle center={position} radius={selectedLocation?.value ? selectedLocation.value : 0} />
    </LayerGroup>
    :null}
    <LocationMarker
    setBounds={setBounds}
    position={position}
    setPosition={setPosition}
    />
      </Map>
    );
  
}

export default LeafletMap