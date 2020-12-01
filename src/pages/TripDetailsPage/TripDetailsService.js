import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;

export const getTrip = async (id) => {
    let res = await axios
      .get(`${url}/trip`,{headers: authHeader(), params:
    {
        id:id
    }})
      .catch((error) => alert(error.message));
    let data = res?.data;
    console.log(data);
    return data ? data : null;
  };