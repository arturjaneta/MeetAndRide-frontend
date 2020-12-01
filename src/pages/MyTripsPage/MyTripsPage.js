import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import FindTripTable from "../../components/FindTrip/FindTripTable";
import MyTripsHeader from "./MyTripsHeader"
import {getMyTrips} from "./MyTripsService"

// const definedTrips = [
//   {id:1,title:"Test ride",description:"Description of test ride",fromDate:"2020-11-08 18:00",toDate:"2020-11-08 20:00",fromPlace:"Mycity",toPlace:"City2",trace:"",speed:1,ownerId:1},
//   {id:2,title:"Test ride2",description:"Description of test ride2",fromDate:"2020-12-08 18:00",toDate:"2020-12-08 20:00",fromPlace:"Test",toPlace:"City2",trace:"",speed:2,ownerId:2},
//   {id:3,title:"Test ride3",description:"Description of test ride3",fromDate:"2020-11-09 18:00",toDate:"2020-11-09 20:00",fromPlace:"Rownica",toPlace:"Rybnik",trace:"",speed:3,ownerId:3}
//   ]

const MyTripsPage = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {   
      getMyTrips().then(setTrips)
   },[]);

  return (
    <>
      <Page title="My trips">
        <div>
          <MyTripsHeader/>
          <FindTripTable trips={trips}/>
          </div>
      </Page>
    </>
  );
};

export default MyTripsPage;