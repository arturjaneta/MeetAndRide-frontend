import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";


const TripDetailsPage = (props) => {

    return (
        <>
          <Page title="Trip details">
              <div>
                Trip details: {props.match.params.id}
                </div>
          </Page>
        </>
      );


}

export default TripDetailsPage