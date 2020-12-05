import React, { useState, useEffect } from "react";

const MotorcyclesTableRow = ({motorcycle}) =>{




    return (
        <tr className="is-capitalized">
            <td className="column-brandName">
                <p>{motorcycle.brandName}</p>
            </td>
            <td className="column-modelName">
              <p>{motorcycle.modelName}</p>
            </td>
            <td className="column-power">
              <p>{motorcycle.power}</p>
            </td>
            <td className="column-capacity">
                <p>{motorcycle.capacity}</p>
            </td>
            <td className="column-registrationNumber">
              <p>{motorcycle.registrationNumber}</p>
            </td>
            <td className="column-year">
              <p>{motorcycle.year}</p>
            </td>
        </tr>
      );


}

export default MotorcyclesTableRow