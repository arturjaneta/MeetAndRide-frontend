import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;

export const addTrip = async (body) => {
    await axios.post(`${url}/trip`, body, {headers: authHeader()})
        .catch((error) => alert(error.message));
    };