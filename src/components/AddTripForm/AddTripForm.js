import React, { useState, useEffect, useCallback } from "react";
import SelectInput from "../common/SelectInput/SelectInput";
import "./AddTripForm.css"
import moment from "moment";
import {addTrip} from "./AddTripService"
import {useHistory} from 'react-router-dom';

const speedOptions = [{id:1,label:"SLOW"},{id:2,label:"NORMAL"},{id:3,label:"FAST"},{id:4,label:"VERY_FAST"},{id:5,label:"NO_LIMIT"}]
const tagsOptions = [{id:1,label:"NO_HIGHWAYS"},{id:2,label:"OFFROAD"},{id:3,label:"TOURING"},{id:4,label:"JUST_RIDING"}]


const AddTripForm = ({trip,routers}) => {
        const [title,setTitle] = useState(trip?trip.title:"");
        const [description,setDescription] = useState(trip?trip.description:"");
        const [beginDate,setBeginDate] = useState(moment());
        const [finishDate,setFinishDate] = useState(moment());
        const [from,setFrom] = useState("");
        const [to,setTo] = useState("");
        const [speed,setSpeed] = useState(trip?trip.speed:[]);
        const [tags,setTags] = useState(trip?trip.tags:[]);
        const [touched,setTouched] = useState(false);

        const onClickFromTo = () => {
          if(touched===false){
            setTouched(true)
            setFrom(routers[1]?.getWaypoints()[0].name)
            setTo(routers[1]?.getWaypoints()[1].name)
          }
        };
        
    
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
          console.log(routers[1]?.getWaypoints())
          if(routers[1]?.getWaypoints()[1].latLng===null||routers[1]?.getWaypoints()[0].latLng===null){
            alert("You have to add minimum 2 waypoints!")
          }else if(title===""){
            alert("Title cannot be empty!")
          }else if(speed===null||speed.length===0){
            alert("Speed cannot be empty!")
          }else if(from===""){
            alert("From cannot be empty!")
          }else if(to===""){
            alert("To cannot be empty!")
          }else{
            const body = {
              title:title,
              description:description,
              fromDate:beginDate,
              toDate:finishDate,
              fromPlace:from,
              toPlace:to,
              waypoints:routers[1]?.getWaypoints().map(waypoint=>waypoint.latLng),
              speed:speed.id,
              tags:tags.map(tag=>tag.id)
            }
          
            addTrip(body).then(handleOnClick)
          }
        }

        const handleSpeedSelect = (selected) => {
            setSpeed(selected)
        }

        const handleTagsSelect = (selected) => {
          setTags(selected)
      }

        const handleBeginDateChange = (event) => {
          if(event.target.value===""){
            setBeginDate(moment())
            if (moment().isAfter(finishDate)) 
                setFinishDate(moment())
          }
          else{
            const newDate = event.target.value + " " + beginDate.hour() + ":" + beginDate.minute();
            const date = moment(newDate, "YYYY-MM-DD HH:mm")
            setBeginDate(date);
            if (date.isAfter(finishDate)) 
                setFinishDate(date)
            console.log(newDate)
          }
          };

          const handleBeginTimeChange = (event) => {
            console.log(event.target.value)
            const value = event.target.value===""?"00:00":event.target.value
            const time = moment(value, "HH:mm")
            const newDate = beginDate?.hour(time.hour()).minute(time.minute())
            const date = moment(newDate)
            setBeginDate(date);
            if (date.isAfter(finishDate)) 
                setFinishDate(date)
            console.log(date)
          };

          const handleFinishDateChange = (event) => {
            if(event.target.value===""){
              setFinishDate(moment())
              if (moment().isBefore(beginDate)) 
                setBeginDate(moment())
            }
            else{
            const newDate = event.target.value + " " + finishDate.hour() + ":" + finishDate.minute();
            const date = moment(newDate, "YYYY-MM-DD HH:mm")
            setFinishDate(date);
            if (date.isBefore(beginDate)) 
                setBeginDate(date)
            console.log(date)
            }
          };

          const handleFinishTimeChange = (event) => {
            const value = event.target.value===""?"00:00":event.target.value
            const time = moment(value, "HH:mm")
            const newDate = finishDate?.hour(time.hour()).minute(time.minute())
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
            onClick={onClickFromTo}
            />

            <p className="has-text-weight-bold mt-2 mb-2 is-size-4">To:</p>
            <input
            type="text"
            className="input text-input"
            value={to}
            onChange={handleToChange}
            onClick={onClickFromTo}
            />

            


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