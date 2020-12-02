import axios from "axios";
import {authHeader} from '../Auth/AuthHeader'

const url = `http://localhost:8080`;

export const editTrip = async (body) => {
    await axios.put(`${url}/trip`, body, {headers: authHeader()})
        .catch((error) => alert(error.message));
    };

    export const deleteTrip = async (id) => {
        await axios.delete(`${url}/trip`, {headers: authHeader(), params:
        {
            id:id
        }})
            .catch((error) => alert(error.message));
        };