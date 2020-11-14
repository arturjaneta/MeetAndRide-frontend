import axios from "axios";
import {authHeader} from '../components/Auth/AuthHeader'

const url = `${process.env.REACT_APP_API_URL}`;

export const getVacations = async (year, userId) => {
  let res = await axios
    .get(`${url}/vacations`, {headers: authHeader(), params: { year, userId } })
    .catch((error) => alert(error.message));
  let data = res?.data;
  console.log(data);
  return data ? data : [];
};

export const getUsers = async (page, size) => {
    let res = await axios
      .get(`${url}/users`, {headers: authHeader(), params: { page, size } })
      .catch((error) => alert(error.message));
    let data = res?.data;
    return data ? data.content : null;
};

export const getDaysOff = async (year) => {
    let res = await axios
      .get(`${url}/daysoff`, {headers: authHeader(), params: { year } })
      .catch((error) => alert(error.message));
    let data = res?.data;
    return data || null;
};

export const getCurrentUser = async () => {
  let res = await axios
    .get(`${url}/users/current`, {headers: authHeader()})
    .catch((error) => alert(error.message));
  let data = res?.data;
  return data || null;
};

export const addVacation = async (body) => {
await axios.post(`${url}/vacations`, body, {headers: authHeader()})
    .catch((error) => alert(error.message));
};

export const editVacation = async (body) => {
  await axios.post(`${url}/vacations/edit`, body, {headers: authHeader()})
      .catch((error) => alert(error.message));
  };
