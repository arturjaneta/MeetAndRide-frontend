import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import PeopleTable from "../../components/People/PeopleTable";
import * as AxiosService from "../../components/common/AxiosService";


const people = [
{id:"1",firstName:"Admin",lastName:"admin",email:"a@a.pl",isActive:true,isAdmin:true},
{id:"2",firstName:"user1",lastName:"asda",email:"dasda@dsf.pl",isActive:true,isAdmin:false},
{id:"3",firstName:"user2",lastName:"admasdin",email:"sdfsd@sdf.pl",isActive:false,isAdmin:false},
{id:"4",firstName:"user3",lastName:"admasdain",email:"sfad@dsf.pl",isActive:true,isAdmin:false},
]

const PeoplePage = () => {
  const [users, setUsers] = useState(people);

  const handleSave = () => {
    console.log(users)
  };

  return (
    <Page title="Users">
      <PeopleTable
        users={users}
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
