import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import FindTripTable from "../../components/FindTrip/FindTripTable";
import {getTrips} from "./FindTripService";
import FilterBar from "./FilterBar";


const date = [{id:1,label:"Today"},{id:2,label:"Tomorrow"},{id:3,label:"Next 7 days"},{id:4,label:"Next 30 days"},{id:5,label:"Later than 30 days"}]
const location = [{id:1,label:"5 km",value:5000},{id:2,label:"10 km",value:10000},{id:3,label:"25 km",value:25000},{id:4,label:"50 km",value:50000},{id:5,label:"More than 50 km",value:0}]
const speed = [{id:1,label:"125ccm"},{id:2,label:"Recreation"},{id:3,label:"Turistic"},{id:4,label:"Turistic +"},{id:5,label:"Dynamic"}]
const tags = [{id:1,label:"No highways"},{id:2,label:"Offroad"},{id:3,label:"Touring"},{id:4,label:"Just riding"}]

const definedTrips = [
{id:1,title:"Test ride",description:"Description of test ride",fromDate:"2020-11-08 18:00",toDate:"2020-11-08 20:00",fromPlace:"Mycity",toPlace:"City2",trace:"",speed:1,ownerId:1},
{id:2,title:"Test ride2",description:"Description of test ride2",fromDate:"2020-12-08 18:00",toDate:"2020-12-08 20:00",fromPlace:"Test",toPlace:"City2",trace:"",speed:2,ownerId:2},
{id:3,title:"Test ride3",description:"Description of test ride3",fromDate:"2020-11-09 18:00",toDate:"2020-11-09 20:00",fromPlace:"Rownica",toPlace:"Rybnik",trace:"",speed:3,ownerId:3}
]

const FindTripPage = () => {
  const [trips, setTrips] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedSpeed, setSelectedSpeed] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {   
    const body = {
      date:selectedDate,
      range:selectedLocation,
      speed:selectedSpeed,
      tags:selectedTags
    }
    console.log(body)
    getTrips("null","null","null","null").then(setTrips)
 },[]);

  const handelDateSelect = (selected) => {
    setSelectedDate(selected)
    console.log(selected)
  }

  const handelLocationSelect = (selected) => {
    setSelectedLocation(selected)
    console.log(selected)
  }

  const handelSpeedSelect = (selected) => {
    console.log(selected)
  }

  const handelTagsSelect = (selected) => {
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
            />
            <FindTripTable trips={trips}/>
            </div>
      </Page>
    </>
  );
};

export default FindTripPage;
