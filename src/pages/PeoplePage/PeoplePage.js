import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import PeopleTable from "../../components/People/PeopleTable";
import * as AxiosService from "../../components/common/AxiosService";

const PeoplePage = () => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AxiosService.getProjects(loadProjectsData);
  }, []);

  const loadUsersData = (data) => {
    setUsers(data);
  };

  const loadProjectsData = (data) => {
    setProjects(data);
    AxiosService.getUsers(loadUsersData);
  };

  const handleUserEdit = (user, userName, projects, isActive) => {
    const newUser = {
      id: user.id,
      name: userName,
      projectIds: projects?.map((p) => p.id),
      active: isActive,
    };
    const newUsers = users.map((u) => (u === user ? newUser : u));
    setUsers(newUsers);
  };

  const handleSave = () => {
    AxiosService.setUsers(users);
  };

  return (
    <Page title="Users">
      <PeopleTable
        users={users}
        onUserEdit={handleUserEdit}
        projects={projects}
      />
      <button
        className="button is-pulled-right is-link mt-4"
        onClick={handleSave}
      >
        Save
      </button>
    </Page>
  );
};

export default PeoplePage;
