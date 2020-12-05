import "./MotorcyclesTableHeader.style.css";
import React, { useState, useEffect } from "react";

const AddMotorcycle = ({setBrand,setModel,setPwr,setCapacit,setRegistration,setYear}) => {
    const [brandName,setBrandName] = useState("")
    const [modelName,setModelName] = useState("")
    const [Power,setPower] = useState("")
    const [Capacity,setCapacity] = useState("")
    const [registrationNumber,setRegistrationNumber] = useState("")
    const [ProdYear,setProdYear] = useState("")

    const handleBrandNameChange = (event) => {
        setBrand(event.target.value)
        setBrandName(event.target.value)
      };

      const handleModelNameChange = (event) => {
        setModel(event.target.value)
        setModelName(event.target.value)
      };

      const handlePowerChange = (event) => {
        setPwr(event.target.value)
        setPower(event.target.value)
      };

      const handleCapacityChange = (event) => {
        setCapacit(event.target.value)
        setCapacity(event.target.value)
      };

      const handleRegistrationNumberChange = (event) => {
        setRegistration(event.target.value)
        setRegistrationNumber(event.target.value)
      };

      const handleYearChange = (event) => {
        setYear(event.target.value)
        setProdYear(event.target.value)
      };

  return (
    <tr className="is-capitalized">
      <th className="column-brandName">
          <input
            type="text"
            className="input text-input"
            value={brandName}
            onChange={handleBrandNameChange}
          />
          </th>
      <th className="column-modelName"><input
            type="text"
            className="input text-input"
            value={modelName}
            onChange={handleModelNameChange}
          /></th>
      <th className="column-power"><input
            type="number"
            className="input text-input"
            value={Power}
            onChange={handlePowerChange}
            min="1"
          /></th>
      <th className="column-capacity"><input
            type="number"
            className="input text-input"
            value={Capacity}
            onChange={handleCapacityChange}
            min="1"
          /></th>
      <th className="column-registrationNumber"><input
            type="text"
            className="input text-input"
            value={registrationNumber}
            onChange={handleRegistrationNumberChange}
          /></th>
          <th className="column-year"><input
            type="number"
            className="input text-input"
            value={ProdYear}
            onChange={handleYearChange}
            min="1900"
          /></th>
    </tr>
  );
};

export default AddMotorcycle;