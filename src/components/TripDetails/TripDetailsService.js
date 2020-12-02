import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;

export const addUser = async (id) => {
    await axios.patch(`${url}/trip`,{
    }, {headers: authHeader(), params:
    {
        id:id
    }})
        .catch((error) => alert(error.message));
    };


    export const getParticipants = async (id) => {
        let res = await axios.get(`${url}/user/getall/trip`, {headers: authHeader(), params:
            {
                id:id
            }})
            .catch((error) => alert(error.message));
            let data = res?.data;
          console.log(data);
          return data ? data : [];
        };

        export const getMotorcycles = async () => {
            let res = await axios.get(`${url}/user/getmotorcycles`, {headers: authHeader()})
                .catch((error) => alert(error.message));
                let data = res?.data;
              console.log(data);
              return data ? data : [];
            };