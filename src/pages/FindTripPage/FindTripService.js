import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;


    export const getTrips = async (date,range,speed,tags) => {
        let res = await axios.get(`${url}/trip/all`, {headers: authHeader(), params:
        {
            date:date,
            range:range,
            speed:speed,
            tags:tags
        }})
            .catch((error) => alert(error.message));
            let data = res?.data;
        console.log(data);
        return data ? data : [];
        };