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

const PeopleTable = ({ users, onUserEdit, projects }) => {
  return (
    <Table
      header={<PeopleTableHeader headers={headers} />}
      body={[
        ...users.map((user) => (
          <PeopleTableRow
            key={user.id}
            user={user}
            onUserEdit={onUserEdit}
            projects={projects}
          />
        )),
      ]}
    />
  );
};

PeopleTable.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isActive: PropTypes.bool,
      projectIds: PropTypes.arrayOf(PropTypes.number),
    })
  ),
  onUserAdd: PropTypes.func,
  onUserEdit: PropTypes.func,
};

export default PeopleTable;
