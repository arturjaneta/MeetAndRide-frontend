import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';

import Page from '../../components/Page/Page';

import {changeNames,changePassword} from "./AccountService"


import * as services from '../../components/common/AxiosService';
import * as authService from '../../components/Auth/AuthService';

import MotorcyclesTable from "../../components/Motorcycles/MotorcyclesTable"
import AddMotorcycle from "../../components/Motorcycles/AddMotorcycle"
import AddTripPage from '../AddTripPage/AddTripPage';
import Table from "../../components/Table/Table";

function Account() {
    
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [repeatPassword,setRepeatPassword] = useState("")

    const [conflictedEmail, setConflictedEmail] = useState("");
    const [motorcycles, setMotorcycles] = useState([])

    const [brandName,setBrandName] = useState("")
    const [modelName,setModelName] = useState("")
    const [Power,setPower] = useState("")
    const [Capacity,setCapacity] = useState("")
    const [registrationNumber,setRegistrationNumber] = useState("")

    const handleAddMotorcycle = () => {
        console.log(brandName)
        console.log(modelName)
        console.log(Power)
        console.log(Capacity)
        console.log(registrationNumber)
    }
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
      };


      const handleLastNameChange = (event) => {
        setLastName(event.target.value)
      };

      const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value)
      };

      const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value)
      };
   
    const handleChangeName = () =>{
        if(firstName.length===""||lastName===""){
            alert("First name and last name cannot be empty!")
        }else{
        changeNames(firstName,lastName)
        }
    }

    const handleChangePassword = () =>{
        if(newPassword.length<8){
            alert("Password is too short(min 8)!")
        }else{
        if(newPassword===repeatPassword){
            changePassword(newPassword)
        }else{
            alert("Passwords are not same!")
        }
    }
    }

    return (
        <Page
            title='Account'
        >
            <div className="mb-6">
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">First name:</p>
            <input
            type="text"
            className="input text-input"
            value={firstName}
            onChange={handleFirstNameChange}
            />

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Last name:</p>
            <input
            type="text"
            className="input text-input"
            value={lastName}
            onChange={handleLastNameChange}
            />

            <button
                className="button is-pulled-right is-link mt-4"
                type="button"
                onClick={handleChangeName}
            >
            Change names
            </button>
            </div>
            <div>
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">New password:</p>
            <input
            type="password"
            className="input text-input"
            value={newPassword}
            onChange={handleNewPasswordChange}
            />

        <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Repeat password:</p>
            <input
            type="password"
            className="input text-input"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            />

            <button
                className="button is-pulled-right is-link mt-4"
                type="button"
                onClick={handleChangePassword}
            >
            Change password
            </button>
            </div>

            {/* <h1 className="title is-2 is-capitalized has-text-weight-bold mt-6">
                Your motorcycles
            </h1>
            
            <MotorcyclesTable
            motorcycles={motorcycles}
            />

            <h1 className="title is-4 is-capitalized has-text-weight-bold mt-5">
                Add motorcycle
            </h1>

            <Table
      header={<AddMotorcycle
        setBrand={setBrandName}
        setModel={setModelName}
        setPwr={setPower}
        setCapacit={setCapacity}
        setRegistration={setRegistrationNumber}
        />}
        body={[]}
        />
            <button
        className="button is-pulled-right is-link mt-4"
        onClick={handleAddMotorcycle}
      >
        Add
      </button> */}

        </Page>
    );
}

export default Account;