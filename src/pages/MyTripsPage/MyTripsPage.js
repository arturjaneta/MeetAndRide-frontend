import React, { useState, useCallback } from "react";
import Page from "../../components/Page/Page";
import FindTripTable from "../../components/FindTrip/FindTripTable";
import MyTripsHeader from "./MyTripsHeader"

const MyTripsPage = () => {
  const [trips, setTrips] = useState([]);

  

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