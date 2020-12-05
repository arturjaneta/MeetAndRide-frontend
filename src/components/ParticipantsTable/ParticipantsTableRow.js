import React, { useState, useEffect } from "react";

const MotorcyclesTableRow = ({participant}) =>{


    return (
        <tr className="is-capitalized">
          <td className="column-firstName">
                <p>{participant.firstName}</p>
            </td>
            <td className="column-lastName">
              <p>{participant.lastName}</p>
            </td>
            <td className="column-brandName">
                <p>{participant.motorcycleDTO.brandName}</p>
            </td>
            <td className="column-modelName">
              <p>{participant.motorcycleDTO.modelName}</p>
            </td>
            <td className="column-power">
              <p>{participant.motorcycleDTO.power}</p>
            </td>
            <td className="column-capacity">
                <p>{participant.motorcycleDTO.capacity}</p>
            </td>
            <td className="column-registrationNumber">
              <p>{participant.motorcycleDTO.registrationNumber}</p>
            </td>
            <td className="column-year">
              <p>{participant.motorcycleDTO.year}</p>
            </td>
        </tr>
      );


}

export default MotorcyclesTableRow