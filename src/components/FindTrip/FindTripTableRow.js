import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "moment/locale/pl";
import moment from "moment";

const FindTripTableRow = ({
  trip
}) => {


  return (
    <tr>
      <td className="is-vcentered">
          <label>{trip.title}</label>
      </td>
      <td className="is-vcentered">
          <label>{trip.fromDate}</label>
      </td>
      <td className="is-vcentered">
          <label>{trip.toDate}</label>
      </td>
      <td className="is-vcentered">
          <label> {trip.fromPlace}</label>
      </td>
      <td className="is-vcentered">
          <label> {trip.toPlace} </label>
      </td>
    </tr>
  );
};

export default FindTripTableRow;

