import React from "react";
import PropTypes from "prop-types";
import Table from "../Table/Table";
import FindTripTableHeader from "./FindTripTableHeader";
import FindTripTableRow from "./FindTripTableRow";
import "moment/locale/pl";


const headers = {
  title: { label: "Title" },
  fromDate: { label: "Begin date" },
  toDate: { label: "Finish date" },
  fromPlace: { label: "From" },
  toPlace: { label: "To" },
  speed: { label: "Speed" },
};

const FindTripTable = ({trips}) => {

  return (
    <div className="mb-5">
      {trips ?
      <Table
        header={<FindTripTableHeader headers={headers} />}
        body={[
          ...trips.map((trip) => (
            <FindTripTableRow
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

export default FindTripTable;
