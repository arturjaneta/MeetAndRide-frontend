import React from "react";
import PeopleTableRow from "./PeopleTableRow/PeopleTableRow";
import PeopleTableHeader from "./PeopleTableHeader";
import PropTypes from "prop-types";
import Table from "../Table/Table";

const headers = {
  email: { label: "Email" },
  firstName: { label: "First name" },
  lastName: { label: "Last name" },
  actions: { label: "Actions" },
};

const PeopleTable = ({users}) => {
  return (
    <Table
      header={<PeopleTableHeader headers={headers} />}
      body={[
        ...users.map((user) => (
          <PeopleTableRow
            key={user.id}
            user={user}
          />
        )),
      ]}
    />
  );
};

export default PeopleTable;
