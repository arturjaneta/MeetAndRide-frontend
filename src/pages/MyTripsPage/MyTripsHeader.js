import React, { useState, useEffect,useCallback } from "react";
import {useHistory} from 'react-router-dom';
const MyTripsHeader = () => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(`/add`), [history]);
  const handleButton = (e) =>{
    console.log("click")
  }

    return(
        <>
        <div className="columns">
        <div className="column">
            <button onClick={handleOnClick} className="button is-pulled-right is-link">Add new</button>
        </div>
        </div>
        </>
    )
}

export default MyTripsHeader