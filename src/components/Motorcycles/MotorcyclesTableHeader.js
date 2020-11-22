import React from "react";
import "./MotorcyclesTableHeader.style.css";

const MotorcyclesTableHeader = ({ headers }) => {
  return (
    <tr className="is-capitalized">
      <th className="column-brandName">{headers.brandName.label}</th>
      <th className="column-modelName">{headers.modelName.label}</th>
      <th className="column-power">{headers.power.label}</th>
      <th className="column-capacity">{headers.capacity.label}</th>
      <th className="column-registrationNumber">{headers.registrationNumber.label}</th>
    </tr>
  );
};

export default MotorcyclesTableHeader;