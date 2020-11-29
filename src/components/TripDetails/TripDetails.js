import React, { useState, useEffect } from "react";
import SelectInput from "../common/SelectInput/SelectInput";
import moment from "moment";
import ParticipantList from "./ParticipantList"

const speedOptions = [{id:1,label:"125ccm"},{id:2,label:"Recreation"},{id:3,label:"Turistic"},{id:4,label:"Turistic +"},{id:5,label:"Dynamic"}]

const people = [
    {id:"1",firstName:"Admin",lastName:"admin",email:"a@a.pl",isActive:true,isAdmin:true},
    {id:"2",firstName:"user1",lastName:"asda",email:"dasda@dsf.pl",isActive:true,isAdmin:false},
    {id:"3",firstName:"user2",lastName:"admasdin",email:"sdfsd@sdf.pl",isActive:false,isAdmin:false},
    {id:"4",firstName:"user3",lastName:"admasdain",email:"sfad@dsf.pl",isActive:true,isAdmin:false},
    ]

const TripDetails = ({trip}) => {
        const[participants,setParticipants] = useState(people)
    
        const handleAddMe = () => {
            console.log("add")
        }


      return (
          <>
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Title:</p>
            <p>{trip?.title}</p>

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Description:</p>
            <p>{trip?.description}</p>

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Begin date:</p>
            <p>{trip?.fromDate}</p>

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Finish date:</p>
            <p>{trip?.toDate}</p>


            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">From:</p>
            <p>{trip?.fromPlace}</p>

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">To:</p>
            <p>{trip?.toPlace}</p>

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Speed:</p>
            <p>{trip? speedOptions[trip.speed.id].label:""}</p>

            <ParticipantList participants={participants}/>

            {/* motocykle */}
            <div className="columns mt-3">
                <div className="column">
                    {/* <p>Select your motorcycle:</p>
            <SelectInput></SelectInput> */}
            </div>
            <div className="column">
            <button
                className="button is-pulled-right is-link mt-4"
                type="submit"
                onClick={handleAddMe}
            >
            Add me
            </button>
            </div>
            </div>
          </>
        );

  }
  
  export default TripDetails