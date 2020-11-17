import React, { useState, useEffect } from "react";

import Switch from "../../common/Switch/Switch";
import SelectInput from "../../common/SelectInput/SelectInput";


const PeopleTableRow = ({user}) => {
  const [userFirstName, setUserFirstName] = useState(user?.firstName);
  const [userLastName, setUserLastName] = useState(user?.lastName);

  const handleUserFirstNameChange = (event) => {
    user.firstName = event.target.value
    setUserFirstName(event.target.value)
  };

  const handleUserLastNameChange = (event) => {
    user.lastName = event.target.value
    setUserLastName(event.target.value)
  };

  const handleIsActiveChange = (event) => {
    if(event.target.value==="on")
        user.isActive = true
    else
        user.isActive = false
  };

  const handleIsAdminChange = (event) => {
    if(event.target.value==="on")
        user.isAdmin = true
    else
        user.isAdmin = false
  };

  return (
    <tr>
      <td className="is-vcentered">
      <input
            type="text"
            className="input text-input"
            value={userFirstName}
            onChange={handleUserFirstNameChange}
          />
      </td>
      <td className="is-vcentered">
      <input
            type="text"
            className="input text-input"
            value={userLastName}
            onChange={handleUserLastNameChange}
          />
      </td>
      <td className="is-vcentered">
        <p>{user.email}</p>
      </td>
      <td className="is-vcentered">
        <div className="level mt-1 mb-1">
          <span className="mr-2">
          Active:
          </span>
          {user ? (
            <Switch
              defaultChecked={user.isActive}
              onChange={handleIsActiveChange}
            />
          ) : null}
        </div>
        <div className="level mt-1 mb-1">
          <span className="mr-2">
          Is Admin:
          </span>
          {user ? (
            <Switch
              defaultChecked={user.isAdmin}
              onChange={handleIsAdminChange}
            />
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default PeopleTableRow;
