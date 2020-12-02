import React from "react";
import PropTypes from "prop-types";
import Table from "../Table/Table";
import MyTripsTableHeader from "./MyTripsTableHeader";
import MyTripsTableRow from "./MyTripsTableRow";
import "moment/locale/pl";


const headers = {
  title: { label: "Title" },
  fromDate: { label: "Begin date" },
  toDate: { label: "Finish date" },
  fromPlace: { label: "From" },
  toPlace: { label: "To" },
  speed: { label: "Speed" },
};

const MyTripsTable = ({trips}) => {

  return (
    <div className="mb-5">
      {trips ?
      <Table
        header={<MyTripsTableHeader headers={headers} />}
        body={[
          ...trips.map((trip) => (
            <MyTripsTableRow
              key={trip.id}
              trip={trip}
            />
          )),
        ]}
      />
    : null}
    </div>
  );
};

export default MyTripsTable;
