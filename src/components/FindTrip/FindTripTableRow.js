import React, { useCallback } from "react";
import PropTypes from "prop-types";
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
      <td className="is-vcentered">
          <label> {trip.speed} </label>
      </td>
      <td className="is-vcentered">
        {trip.tags?.map(tag=><label> {tag} </label>)}
      </td>
    </tr>
  );
};

export default FindTripTableRow;

