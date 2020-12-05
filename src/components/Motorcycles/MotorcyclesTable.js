import React from "react";
import MotorcyclesTableRow from "./MotorcyclesTableRow";
import MotorcyclesTableHeader from "./MotorcyclesTableHeader";
import Table from "../Table/Table";

const headers = {
  brandName: { label: "Brand" },
  modelName: { label: "Model" },
  year: { label: "Year" },
  power: { label: "Power" },
  capacity: { label: "Capacity" },
  registrationNumber: { label: "Registration number" },
};

const MotorcyclesTable = ({motorcycles}) => {
  return (
    <Table
      header={<MotorcyclesTableHeader headers={headers} />}
      body={[
        ...motorcycles.map((motorcycle) => (
          <MotorcyclesTableRow
            key={motorcycle.id}
            motorcycle={motorcycle}
          />
        )),
      ]}
    />
  );
};

export default MotorcyclesTable;