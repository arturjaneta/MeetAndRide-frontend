import React, { useState, useEffect } from "react";
import SelectInput from "../common/SelectInput/SelectInput";
import moment from "moment";
import ParticipantList from "./ParticipantList"
import ParticipantTable from "../../components//ParticipantsTable/ParticipantsTable"
import {addUser,getParticipants,getMotorcycles,removeUser} from "./TripDetailsService"
import {getCurrentUser} from "../MainMenu/MainMenuService"

const people = [
    {id:"1",firstName:"Admin",lastName:"admin",email:"a@a.pl",isActive:true,isAdmin:true},
    {id:"2",firstName:"user1",lastName:"asda",email:"dasda@dsf.pl",isActive:true,isAdmin:false},
    {id:"3",firstName:"user2",lastName:"admasdin",email:"sdfsd@sdf.pl",isActive:false,isAdmin:false},
    {id:"4",firstName:"user3",lastName:"admasdain",email:"sfad@dsf.pl",isActive:true,isAdmin:false},
    ]

const TripDetails = ({trip}) => {
        const[participants,setParticipants] = useState([])
        const [motorcycles,setMotorcycles] = useState([])
        const [selectedMotorcycle,setSelectedMotorcycle] = useState(null);
        const [currentUser, setCurrentUser] = useState(null)
    
        const handleAddMe = () => {
            //console.log(motorcycles)
            addUser(trip?.id,selectedMotorcycle?.id).then(()=>getParticipants(trip?.id).then(setParticipants))
        }

        const handleDeleteMe = () => {
            console.log("delete")
            removeUser(trip?.id).then(()=>getParticipants(trip?.id).then(setParticipants))
        }
        
        useEffect(() => {  
            getCurrentUser().then(setCurrentUser)
            if(trip)
                getParticipants(trip?.id).then(setParticipants)
            getMotorcycles().then(setMotorcycles)
         },[trip]);



      return (
          <>
            <p className="has-text-weight-bold mt-3 mb-3 is-size-3">{trip?.title}</p>

            <p>{trip?.description}</p>

            <div className="columns">
                <div className="column">
                    <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Begin date:</p>
                    <p>{moment(trip?.fromDate).format("YYYY-MM-DD HH:mm")}</p>
                </div>
                <div className="column">
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Finish date:</p>
            <p>{moment(trip?.toDate).format("YYYY-MM-DD HH:mm")}</p>
            </div>
                <div className="column">
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">From:</p>
            <p>{trip?.fromPlace}</p>
            </div>
                <div className="column">
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">To:</p>
            <p>{trip?.toPlace}</p>
            </div>
                <div className="column">
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Speed:</p>
            <p>{trip? trip.speed:""}</p>
            </div>
            </div>

            

            {currentUser&&participants?
            <div>
                {!participants.map(p=>p.userId).includes(currentUser.id)?
                <div>
            <p className="mt-4">Choose your motorcycle:</p>
            <div className="columns">
                <div className="column is-three-quarters">
                    <SelectInput
                    className="is-pulled-right mt-4"
                    defaultValue={selectedMotorcycle}
                    options={motorcycles}
                    getOptionLabel={(option) => `${option.brandName} ${option.modelName} ${option.capacity} ${option.year} ${option.registrationNumber}`}
                    getOptionValue={(option) => option["id"]}
                    onChange={setSelectedMotorcycle}
                    />
                </div>
                <div className="column">
                    {selectedMotorcycle?
                    <button
                    className="button is-pulled-left is-link"
                    type="submit"
                    onClick={handleAddMe}
                    >
                    Add me
                    </button>
                    :
                    <button
                    disabled
                    className="button is-pulled-left is-link"
                    type="submit"
                    onClick={handleAddMe}
                    >
                    Add me
                    </button>}
                    
                </div>
            </div>
            </div>:
            <div className="level mt-4 mb-4">
                <button
                className="button is-pulled-left is-danger"
                type="submit"
                onClick={handleDeleteMe}
                >
                Unsubscribe
            </button>
            </div>
            }
            </div>:null}

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Participants:</p>
            <ParticipantTable participants={participants}/>
            {/* <ParticipantList participants={participants}/> */}
          </>
        );

  }
  
  export default TripDetails