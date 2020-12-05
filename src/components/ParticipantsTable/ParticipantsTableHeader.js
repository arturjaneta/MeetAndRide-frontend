import React from "react";
import "./ParticipantsTableHeader.style.css";

const ParticipantsTableHeader = ({ headers }) => {
  return (
    <tr className="is-capitalized">
      <th className="column-firstName">{headers.firstName.label}</th>
      <th className="column-lastName">{headers.lastName.label}</th>
      <th className="column-brandName">{headers.brandName.label}</th>
      <th className="column-modelName">{headers.modelName.label}</th>
      <th className="column-power">{headers.power.label}</th>
      <th className="column-capacity">{headers.capacity.label}</th>
      <th className="column-registrationNumber">{headers.registrationNumber.label}</th>
      <th className="column-year">{headers.year.label}</th>
    </tr>
  );
};

export default ParticipantsTableHeader;