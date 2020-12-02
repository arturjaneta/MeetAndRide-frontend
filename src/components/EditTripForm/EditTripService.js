import axios from "axios";
import {authHeader} from '../Auth/AuthHeader'

const url = `http://localhost:8080`;

export const editTrip = async (body) => {
    await axios.put(`${url}/trip`, body, {headers: authHeader()})
        .catch((error) => alert(error.message));
    };