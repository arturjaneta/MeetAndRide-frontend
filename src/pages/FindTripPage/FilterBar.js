import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import {MapContainer,TileLayer,Marker,Popup,useMapEvents,Circle,LayerGroup} from "react-leaflet"
import SelectInput from "../../components/common/SelectInput/SelectInput";
import "./FilterBar.css";
import LeafletMap from "./LeafletMap"

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
  position,
  setPosition
  }) => {
    const [bounds, setBounds] = useState({ lat: 50.288656, lng: 18.677925 });


  return (
    <>
  <LeafletMap position={position} setPosition={setPosition} selectedLocation={selectedLocation}/>
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

