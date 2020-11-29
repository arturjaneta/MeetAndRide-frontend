import React, { useState, useEffect } from "react";

const ParticipantList = ({participants}) =>{

    return(<>
    <p className="has-text-weight-bold mt-2 mb-2 is-size-4">Participants:</p>
    {participants.map(p=><p>{p.firstName} {p.lastName}</p>)}
    </>
    )
}

export default ParticipantList