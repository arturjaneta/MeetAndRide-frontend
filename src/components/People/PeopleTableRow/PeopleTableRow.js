import React, { useState, useEffect } from "react";

import Switch from "../../common/Switch/Switch";
import SelectInput from "../../common/SelectInput/SelectInput";
import PropTypes from "prop-types";

const initProjects = (user, projects) => {
  return user?.projectIds.map((projectID) => {
    return projects.find((p) => p.id === projectID);
  });
};

const PeopleTableRow = ({ user, onUserEdit, projects }) => {
  const [userName, setUserName] = useState(user?.name);
  const [selectedProjects, setSelectedProjects] = useState(
    user ? initProjects(user, projects) : []
  );
  const [isActive, setIsActive] = useState(user?.active);
  const [isInputHovered, setIsInputHovered] = useState(false);

  useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
  }, [user]);

  const handleMultiSelectOnChange = (selected) => {
    setSelectedProjects(selected);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleIsActiveChange = (event) => {
    setIsActive(!isActive);
  };

  const handleBlur = () => {
    onUserEdit(
      user,
      userName,
      selectedProjects ? selectedProjects : [],
      isActive
    );
  };

  return (
    <tr onBlur={handleBlur}>
      <td
        onMouseEnter={() => {
          setIsInputHovered(true);
        }}
        onMouseLeave={() => {
          setIsInputHovered(false);
          onUserEdit(
            user,
            userName,
            selectedProjects ? selectedProjects : [],
            isActive
          );
        }}
        className="is-vcentered"
      >
        {isInputHovered ? (
          <input
            type="text"
            className="input text-input"
            value={userName}
            onChange={handleUserNameChange}
          />
        ) : (
          <p>{userName}</p>
        )}
      </td>
      <td className="is-vcentered">
        <SelectInput
          defaultValue={selectedProjects}
          options={projects}
          getOptionLabel={(option) => `${option.name}`}
          getOptionValue={(option) => option["id"]}
          onChange={(selected) => {
            handleMultiSelectOnChange(selected);
          }}
        />
      </td>
      <td className="is-vcentered has-text-right">
        <label className="checkbox">
          {user ? (
            <Switch
              defaultChecked={user.active}
              onChange={handleIsActiveChange}
            />
          ) : null}
        </label>
      </td>
    </tr>
  );
};

PeopleTableRow.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isActive: PropTypes.bool,
    projectIds: PropTypes.arrayOf(PropTypes.number),
  }),
  onUserAdd: PropTypes.func,
  onUserEdit: PropTypes.func,
};

export default PeopleTableRow;
