import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LeafletMap from "./LeafletMap"
import SelectInput from "../../components/common/SelectInput/SelectInput";
import Page from "../../components/Page/Page";
import TripDetalis from "../../components/TripDetails/TripDetails"

const TripDetailsPage = ({id}) => {
  const [waypoints, setWaypoints] = useState(null);
  const [trip,setTrip] = useState(null)
  const [routers,setRouters] = useState([])

    return (
        <>
          <Page title={"Trip details"}>
              <div id="map">
                <LeafletMap waypoints={waypoints} setWaypoints={setWaypoints} routers={routers}/>
                </div>
                <TripDetalis trip={trip?trip:null}/>
          </Page>
        </>
      );


}

export default TripDetailsPage