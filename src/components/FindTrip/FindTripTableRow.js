import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "moment/locale/pl";
import moment from "moment";
import {useHistory} from 'react-router-dom';
import "./FindTripRowStyle.css"

const FindTripTableRow = ({
  trip
}) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/details/${trip.id}`), [history]);

  return (
    <tr onClick={handleOnClick} className="row is-hovered">
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

