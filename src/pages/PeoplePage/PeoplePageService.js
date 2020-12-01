import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;

export const getUsers = async () => {
let res = await axios.get(`${url}/user/getall`, {headers: authHeader()})
    .catch((error) => alert(error.message));
    let data = res?.data;
  console.log(data);
  return data ? data : null;
};

export const saveUsers = async (users) => {
    await axios.post(`${url}/user/saveall`,users,{headers: authHeader()})
        .catch((error) => alert(error.message));
    };
