import React, { useState, useEffect, useCallback } from "react";
import SelectInput from "../common/SelectInput/SelectInput";
import "./EditTripForm.css"
import moment from "moment";
import {editTrip} from "./EditTripService"
import {useHistory} from 'react-router-dom';

const speedOptions = [{id:1,label:"SLOW"},{id:2,label:"NORMAL"},{id:3,label:"FAST"},{id:4,label:"VERY_FAST"},{id:5,label:"NO_LIMIT"}]
const tagsOptions = [{id:1,label:"NO_HIGHWAYS"},{id:2,label:"OFFROAD"},{id:3,label:"TOURING"},{id:4,label:"JUST_RIDING"}]

const EditTripForm = ({trip,routers}) => {
        const [title,setTitle] = useState(trip?trip.title:"");
        const [description,setDescription] = useState(trip?trip.description:"");
        const [beginDate,setBeginDate] = useState(trip?moment(trip.fromDate):moment());
        const [finishDate,setFinishDate] = useState(trip?moment(trip.toDate):moment());
        const [from,setFrom] = useState(trip?trip.fromPlace:"");
        const [to,setTo] = useState(trip?trip.toPlace:"");
        const [speed,setSpeed] = useState(trip?speedOptions.find(e=>e.label===trip.speed):[]);
        const [tags,setTags] = useState(trip?trip.tags.map(tag=>tagsOptions.find(e=>e.label===tag)):[]);

        const history = useHistory();

        const handleOnClick = useCallback(() => history.push(`/mytrips`), [history]);

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

            const body = {
              id:trip?.id,
              title:title,
              description:description,
              fromDate:beginDate,
              toDate:finishDate,
              fromPlace:from,
              toPlace:to,
              waypoints:routers[1]?.getWaypoints().map(waypoint=>waypoint.latLng),
              speed:speed.id,
              ownerId:trip.ownerId,
              tags:tags.map(tag=>tag.id)
            }

            editTrip(body).then(handleOnClick)

        }

        const handleSpeedSelect = (selected) => {
            setSpeed(selected)
        }

        const handleTagsSelect = (selected) => {
          setTags(selected)
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

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Tags:</p>
            <SelectInput
            isMulti
            defaultValue={tags}
            options={tagsOptions}
            getOptionLabel={(option) => `${option.label}`}
            getOptionValue={(option) => option["id"]}
            onChange={(selected) => {
                handleTagsSelect(selected);
            }}/>


            <button
                className="button is-pulled-right is-link mt-4"
                type="submit"
                onClick={handleAddTrip}
            >
            Edit
            </button>
          </>
        );

  }
  
  export default EditTripForm