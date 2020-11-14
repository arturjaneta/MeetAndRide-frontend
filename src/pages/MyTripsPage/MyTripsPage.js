import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import FindTripTable from "../../components/FindTrip/FindTripTable";


const MyTripsPage = () => {
  const [trips, setTrips] = useState([]);


  return (
    <>
      <Page title="My trips">
          <button className="button mb-3 button is-pulled-right is-link">Add new</button>
          <div>
            <FindTripTable trips={trips}/>
            </div>
      </Page>
    </>
  );
};

export default MyTripsPage;