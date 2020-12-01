import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;

export const getMyTrips = async () => {
let res = await axios.get(`${url}/trip/mytrips`, {headers: authHeader()})
    .catch((error) => alert(error.message));
    let data = res?.data;
  console.log(data);
  return data ? data : [];
};
