import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "moment/locale/pl";
import moment from "moment";
import {useHistory} from 'react-router-dom';
import "./MyTripsRowStyle.css"

const MyTripsTableRow = ({
  trip
}) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/edit/${trip.id}`), [history]);

  return (
    <tr onClick={handleOnClick} className="row is-hovered">
      <td className="is-vcentered">
          <label>{trip.title}</label>
      </td>
      <td className="is-vcentered">
          <label>{moment(trip.fromDate).format("YYYY-MM-DD HH:mm")}</label>
      </td>
      <td className="is-vcentered">
          <label>{moment(trip.toDate).format("YYYY-MM-DD HH:mm")}</label>
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

export default MyTripsTableRow;
