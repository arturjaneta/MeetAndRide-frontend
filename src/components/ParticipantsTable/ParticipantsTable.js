import React from "react";
import ParticipantsTableRow from "./ParticipantsTableRow";
import ParticipantsTableHeader from "./ParticipantsTableHeader";
import Table from "../Table/Table";

const headers = {
  firstName: { label: "First name" },
  lastName: { label: "Last name" },
  brandName: { label: "Brand" },
  modelName: { label: "Model" },
  year: { label: "Year" },
  power: { label: "Power" },
  capacity: { label: "Capacity" },
  registrationNumber: { label: "Registration number" },
};

const ParticipantsTable = ({participants}) => {
  return (
    <Table
      header={<ParticipantsTableHeader headers={headers} />}
      body={[
        ...participants.map((participant) => (
          <ParticipantsTableRow
            key={participant.id}
            participant={participant}
          />
        )),
      ]}
    />
  );
};

export default ParticipantsTable;