import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import FindTripTable from "../../components/FindTrip/FindTripTable";
import {getTrips} from "./FindTripService";
import FilterBar from "./FilterBar";


const date = [{id:1,label:"Today",value:1},{id:2,label:"Tomorrow",value:2},{id:3,label:"Next 7 days",value:7},{id:4,label:"Next 30 days",value:30},{id:5,label:"Later than 30 days",value:0}]
const location = [{id:1,label:"5 km",value:5000},{id:2,label:"10 km",value:10000},{id:3,label:"25 km",value:25000},{id:4,label:"50 km",value:50000},{id:5,label:"More than 50 km",value:0}]
const speed = [{id:1,label:"SLOW"},{id:2,label:"NORMAL"},{id:3,label:"FAST"},{id:4,label:"VERY_FAST"},{id:5,label:"NO_LIMIT"}]
const tags = [{id:1,label:"NO_HIGHWAYS"},{id:2,label:"OFFROAD"},{id:3,label:"TOURING"},{id:4,label:"JUST_RIDING"}]

const definedTrips = [
{id:1,title:"Test ride",description:"Description of test ride",fromDate:"2020-11-08 18:00",toDate:"2020-11-08 20:00",fromPlace:"Mycity",toPlace:"City2",trace:"",speed:1,ownerId:1},
{id:2,title:"Test ride2",description:"Description of test ride2",fromDate:"2020-12-08 18:00",toDate:"2020-12-08 20:00",fromPlace:"Test",toPlace:"City2",trace:"",speed:2,ownerId:2},
{id:3,title:"Test ride3",description:"Description of test ride3",fromDate:"2020-11-09 18:00",toDate:"2020-11-09 20:00",fromPlace:"Rownica",toPlace:"Rybnik",trace:"",speed:3,ownerId:3}
]

const FindTripPage = () => {
  const [trips, setTrips] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSpeed, setSelectedSpeed] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [position, setPosition] = useState(null)

  useEffect(() => {   
    const body = {
      date:selectedDate?selectedDate.value:null,
      range:selectedLocation?selectedLocation.value:null,
      location:selectedLocation?position:null,
      speed:selectedSpeed.length===0?null:selectedSpeed.map(speed=>speed.id),
      tags:selectedTags.length===0?null:selectedTags.map(tag=>tag.id)
    }
    console.log(body)
    getTrips(body
      // selectedDate?selectedDate.value:null,
      // selectedLocation?selectedLocation.value:null,
      // selectedLocation?position:null,
      // selectedSpeed.length===0?null:selectedSpeed.map(speed=>speed.id),
      // selectedTags.length===0?null:selectedTags.map(tag=>tag.id)
      ).then(setTrips)
 },[selectedDate,selectedLocation,selectedSpeed,selectedTags]);

  const handelDateSelect = (selected) => {
    setSelectedDate(selected)
    console.log(selected)
  }

  const handelLocationSelect = (selected) => {
    setSelectedLocation(selected)
    console.log(selected)
  }

  const handelSpeedSelect = (selected) => {
    setSelectedSpeed(selected?selected:[])
    console.log(selected)
  }

  const handelTagsSelect = (selected) => {
    setSelectedTags(selected?selected:[])
    console.log(selected)
  }


  return (
    <>
      <Page title="Find trip">
          <div>
            <FilterBar
            date={date}
            location={location}
            speed={speed}
            tags={tags}
            handelDateSelect={handelDateSelect}
            handelLocationSelect={handelLocationSelect}
            handelSpeedSelect={handelSpeedSelect}
            handelTagsSelect={handelTagsSelect}
            selectedDate={selectedDate}
            selectedLocation={selectedLocation}
            selectedSpeed={selectedSpeed}
            selectedTags={selectedTags}
            position={position}
            setPosition={setPosition}
            />
            <FindTripTable trips={trips}/>
            </div>
      </Page>
    </>
  );
};

export default FindTripPage;
