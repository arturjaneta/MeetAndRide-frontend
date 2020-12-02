import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;


    export const getTrips = async (body) => {
        let res = await axios.post(`${url}/trip/all`,body, {headers: authHeader()})
            .catch((error) => alert(error.message));
            let data = res?.data;
        console.log(data);
        return data ? data : [];
        };