import React from "react";
import PropTypes from "prop-types";
import "./PeopleTableHeader.style.css";

const PeopleTableHeader = ({ headers }) => {
  return (
    <tr className="is-capitalized">
      <th className="column-firstName">{headers.firstName.label}</th>
      <th className="column-lastName">{headers.lastName.label}</th>
      <th className="column-email">{headers.email.label}</th>
      <th className="column-actions">{headers.actions.label}</th>
    </tr>
  );
};

export default PeopleTableHeader;

PeopleTableHeader.propTypes = {
  headers: PropTypes.object,
};
