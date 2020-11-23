import React, {useState,useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "./RoutingMachine";

const LeafletMap = () => {
    const [bounds, setBounds] = useState({ lat: 50.288656, lng: 18.677925 });
    const [map,setMap] = useState(null)
    const [routers,setRouters] = useState([])


    const saveMap = map => {
        setMap(map)
    };


    const renderRouting = () => {
        console.log("routing")
        console.log(map)
        console.log(routers)
        if(routers.length>1)
            routers[0]._container.style.display = "none"
        return(
            <Routing map={map} routers={routers}/>
        )
    }

    return (
      <Map center={bounds} zoom={13} ref={saveMap}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {map ? renderRouting() : null}
      </Map>
    );
  
}

export default LeafletMap