import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LeafletMap from "./LeafletMap"
import SelectInput from "../../components/common/SelectInput/SelectInput";
import Page from "../../components/Page/Page";
import "./EditTripPage.css";
import EditTripForm from "../../components/EditTripForm/EditTripForm"
import {getTrip} from "../TripDetailsPage/TripDetailsService"

const EditTripPage = (props) => {
  const [waypoints, setWaypoints] = useState(null);
  const [trip,setTrip] = useState(null)
  const [routers,setRouters] = useState([])

  useEffect(() => {   
    console.log(props.match.params.id)
    getTrip(props.match.params.id).then((data)=>{
      setTrip(data)
      setWaypoints(data.waypoints)
    })
 },[]);

    return (
        <>
          <Page title={"Edit trip"}>
            {trip?
            <div>
              {waypoints?
              <div id="map">
                <LeafletMap waypoints={waypoints} setWaypoints={setWaypoints} routers={routers}/>
                </div>:null}
                <EditTripForm trip={trip} routers={routers}/>
                </div>
            :null}
          </Page>
        </>
      );


}

export default EditTripPage