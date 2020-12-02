import React, { useState, useEffect, useCallback } from "react";
import SelectInput from "../common/SelectInput/SelectInput";
import "./EditTripForm.css"
import moment from "moment";
import {editTrip,deleteTrip} from "./EditTripService"
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

        const handleEditTrip = () => {
          console.log(routers[1]?.getWaypoints())
          if(routers[1]?.getWaypoints()[1].latLng===null||routers[1]?.getWaypoints()[0].latLng===null){
            alert("You have to add minimum 2 waypoints!")
          }else{
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
        }

        const handleDeleteTrip = () => {
          deleteTrip(trip?.id)
          console.log("delete")
      }

        const handleSpeedSelect = (selected) => {
            setSpeed(selected)
        }

        const handleTagsSelect = (selected) => {
          setTags(selected)
      }

      const handleBeginDateChange = (event) => {
        const newDate = event.target.value + " " + beginDate.hour() + ":" + beginDate.minute();
        const date = moment(newDate, "YYYY-MM-DD HH:mm")
        setBeginDate(date);
        if (date.isAfter(finishDate)) 
            setFinishDate(date)
        console.log(newDate)
      };

      const handleBeginTimeChange = (event) => {
        const time = moment(event.target.value, "HH:mm")
        const newDate = beginDate.hour(time.hour()).minute(time.minute())
        const date = moment(newDate)
        setBeginDate(date);
        if (date.isAfter(finishDate)) 
            setFinishDate(date)
        console.log(date)
      };

      const handleFinishDateChange = (event) => {
        const newDate = event.target.value + " " + finishDate.hour() + ":" + finishDate.minute();
        const date = moment(newDate, "YYYY-MM-DD HH:mm")
        setFinishDate(date);
        if (date.isBefore(beginDate)) 
            setBeginDate(date)
        console.log(date)
      };

      const handleFinishTimeChange = (event) => {
        const time = moment(event.target.value, "HH:mm")
        const newDate = finishDate.hour(time.hour()).minute(time.minute())
        const date = moment(newDate)
        setFinishDate(date);
        if (date.isBefore(beginDate)) 
            setBeginDate(date)
        console.log(date)
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

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Begin date:</p>
            <div className="level">
            <label className="is-size-4 mr-3">Date:</label>
            <input className="date input is-vcentered" type="date" value={beginDate?.format("YYYY-MM-DD")} onChange={handleBeginDateChange}/>
            <label className="is-size-4 mr-3 ml-3">Time:</label>
            <input className="time input text-input is-vcentered" type="time" value={beginDate?.format("HH:mm")} onChange={handleBeginTimeChange}/>
            </div>
            

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Finish date:</p>
            <div className="level">
            <label className="is-size-4 mr-3">Date:</label>
            <input className="date input is-vcentered" type="date" value={finishDate?.format("YYYY-MM-DD")} onChange={handleFinishDateChange}/>
            <label className="is-size-4 mr-3 ml-3">Time:</label>
            <input className="time input text-input is-vcentered" type="time" value={finishDate?.format("HH:mm")} onChange={handleFinishTimeChange}/>
            </div>


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

            

            <button
                className="button is-pulled-left is-danger mt-4"
                type="button"
                onClick={handleDeleteTrip}
            >
            Delete
            </button>


            <button
                className="button is-pulled-right is-link mt-4"
                type="submit"
                onClick={handleEditTrip}
            >
            Edit
            </button>
          </>
        );

  }
  
  export default EditTripForm