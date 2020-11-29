import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LeafletMap from "./LeafletMap"
import SelectInput from "../../components/common/SelectInput/SelectInput";
import Page from "../../components/Page/Page";
import "./AddTripPage.css";
import AddTripForm from "../../components/AddTripForm/AddTripForm"

const AddTripPage = ({id}) => {
  const [waypoints, setWaypoints] = useState(null);
  const [trip,setTrip] = useState(null)
  const [routers,setRouters] = useState([])

    return (
        <>
          <Page title={id?"Edit trip":"Add trip"}>
              <div id="map">
                <LeafletMap waypoints={waypoints} setWaypoints={setWaypoints} routers={routers}/>
                </div>
                <AddTripForm trip={trip?trip:null} routers={routers}/>
          </Page>
        </>
      );


}

export default AddTripPage