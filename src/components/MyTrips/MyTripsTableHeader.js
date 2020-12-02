import React from "react";
import PropTypes from "prop-types";
import "./MyTripsTableHeaderStyle.css"


const MyTripsTableHeader = ({ headers }) => {
  return (
    <tr className="is-capitalized">
      <th className="column-title">{headers.title.label}</th>
      <th className="column-fromDate">{headers.fromDate.label}</th>
      <th className="column-toDate">{headers.toDate.label}</th>
      <th className="column-fromPlace">{headers.fromPlace.label}</th>
      <th className="column-toPlace">{headers.toPlace.label}</th>  
    </tr>
  );
};

export default MyTripsTableHeader;
