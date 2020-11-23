import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import {MapContainer,TileLayer,Marker,Popup,useMapEvents,Circle,LayerGroup} from "react-leaflet"
import SelectInput from "../../components/common/SelectInput/SelectInput";
import "./FilterBar.css";

// const LocationMarker = ({setBounds,position,setPosition}) =>  {
//   const map = useMapEvents({
//     click(e) {
//       var latlng = map.mouseEventToLatLng(e.originalEvent)
//       console.log(latlng.lat + ', ' + latlng.lng);
//       setBounds(latlng)
//       setPosition(latlng)
//       map.flyTo(latlng, map.getZoom())
//     },
//     locationfound(e) {
//       setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })
//   if(!position)
//     map.locate()
  
//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   )
// }

const FilterBar = ({date,
  location,
  speed,
  tags,
  handelDateSelect,
  handelLocationSelect,
  handelSpeedSelect,
  handelTagsSelect,
  selectedDate,
  selectedLocation,
  selectedSpeed,
  selectedTags,
  }) => {
    const [bounds, setBounds] = useState({ lat: 50.288656, lng: 18.677925 });
    const [position, setPosition] = useState(null)

  return (
    <>
    {/* <MapContainer
    center={bounds}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {position ?
    <LayerGroup>
      <Circle center={position} radius={selectedLocation.value ? selectedLocation.value : 0} />
    </LayerGroup>
    :null}
    <LocationMarker
    setBounds={setBounds}
    position={position}
    setPosition={setPosition}
    />
  </MapContainer> */}
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="mb-3 mt-5">
            <h1 className="subtitle is-6">Date:</h1>
          </div>
          <SelectInput
          defaultValue={selectedDate}
          isClearable
          options={date}
          getOptionLabel={(option) => `${option.label}`}
          getOptionValue={(option) => option["id"]}
          onChange={(selected) => {
            handelDateSelect(selected);
          }}
          />
        </div>
        <div className="column is-one-quarter">
          <div className="mb-3 mt-5">
            <h1 className="subtitle is-6">Start location:</h1>
          </div>
          {position ? 
          <SelectInput
          defaultValue={selectedLocation}
          isClearable
          options={location}
          getOptionLabel={(option) => `${option.label}`}
          getOptionValue={(option) => option["id"]}
          onChange={(selected) => {
            handelLocationSelect(selected);
          }}/>
          :
          <SelectInput
          defaultValue={selectedLocation}
          isDisabled={true}
          options={location}
          getOptionLabel={(option) => `${option.label}`}
          getOptionValue={(option) => option["id"]}
          onChange={(selected) => {
            handelLocationSelect(selected);
          }}/>
        }
        </div>
        <div className="column is-one-quarter">
          <div className="mb-3 mt-5">
            <h1 className="subtitle is-6">Speed:</h1>
          </div>
          <SelectInput
          isMulti
          defaultValue={selectedSpeed}
          options={speed}
          getOptionLabel={(option) => `${option.label}`}
          getOptionValue={(option) => option["id"]}
          onChange={(selected) => {
            handelSpeedSelect(selected);
          }}/>
        </div>
        <div className="column is-one-quarter">
          <div className="mb-3 mt-5">
            <h1 className="subtitle is-6">Tags:</h1>
          </div>
          <SelectInput
          isMulti
          defaultValue={selectedTags}
          options={tags}
          getOptionLabel={(option) => `${option.label}`}
          getOptionValue={(option) => option["id"]}
          onChange={(selected) => {
            handelTagsSelect(selected);
          }}/>
        </div>
      </div>
      <div id="divider"></div>
    </>
  );
};

export default FilterBar;

