import React, { useState, useEffect } from "react";
import SelectInput from "../common/SelectInput/SelectInput";
import "./AddTripForm.css"
import moment from "moment";

const speedOptions = [{id:1,label:"125ccm"},{id:2,label:"Recreation"},{id:3,label:"Turistic"},{id:4,label:"Turistic +"},{id:5,label:"Dynamic"}]



const AddTripForm = ({trip,routers}) => {
        const [title,setTitle] = useState(trip?trip.title:"");
        const [description,setDescription] = useState(trip?trip.description:"");
        const [beginDate,setBeginDate] = useState(trip?moment(trip.fromDate):moment());
        const [finishDate,setFinishDate] = useState(trip?moment(trip.toDate):moment());
        const [from,setFrom] = useState(trip?trip.fromPlace:"");
        const [to,setTo] = useState(trip?trip.toPlace:"");
        const [speed,setSpeed] = useState(trip?trip.speed:[]);

        const handleTitleChange = (event) => {
            setTitle(event.target.value)
          };

          const handleDescriptionChange = (event) => {
            setDescription(event.target.value)
          };
          
        const handleFromChange = (event) => {
            setFrom(event.target.value)
        };

        const handleToChange = (event) => {
            setTo(event.target.value)
        };

        const handleAddTrip = () => {
            console.log("add")
            console.log(routers[1]?.getWaypoints())
            console.log(description)
        }

        const handleSpeedSelect = (selected) => {
            setSpeed(selected)
        }

        const handleBeginDateChange = (event) => {
            setBeginDate(moment(event.target.value, "YYYY-MM-DDTHH:mm"));
            if (moment(event.target.value, "YYYY-MM-DDTHH:mm").isAfter(finishDate)) 
              setFinishDate(moment(event.target.value, "YYYY-MM-DDTHH:mm"))
            console.log(event.target.value)
          };

          const handleFinishDateChange = (event) => {
            setFinishDate(moment(event.target.value, "YYYY-MM-DDTHH:mm"));
            if (moment(event.target.value, "YYYY-MM-DDTHH:mm").isBefore(beginDate)) 
              setBeginDate(moment(event.target.value, "YYYY-MM-DDTHH:mm"))
            console.log(event.target.value)
          };

      return (
          <>
            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Title:</p>
            <input
            type="text"
            className="input text-input"
            value={title}
            onChange={handleTitleChange}
            />

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Description:</p>
            <textarea class="textarea" value={description} onChange={handleDescriptionChange} rows="6"></textarea>

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Begin date:</p>
            <input
            className="input"
            type="datetime-local"
            value={beginDate?.format("YYYY-MM-DDTHH:mm")}
            onChange={handleBeginDateChange}
          />

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Finish date:</p>
            <input
            className="input"
            type="datetime-local"
            value={finishDate?.format("YYYY-MM-DDTHH:mm")}
            onChange={handleFinishDateChange}
            required
            />


            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">From:</p>
            <input
            type="text"
            className="input text-input"
            value={from}
            onChange={handleFromChange}
            />

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">To:</p>
            <input
            type="text"
            className="input text-input"
            value={to}
            onChange={handleToChange}
            />

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Speed:</p>
            <SelectInput
            defaultValue={speed}
            options={speedOptions}
            getOptionLabel={(option) => `${option.label}`}
            getOptionValue={(option) => option["id"]}
            onChange={(selected) => {
                handleSpeedSelect(selected);
            }}/>


            <button
                className="button is-pulled-right is-link mt-4"
                type="submit"
                onClick={handleAddTrip}
            >
            Add
            </button>
          </>
        );

  }
  
  export default AddTripForm