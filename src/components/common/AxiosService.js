import Axios from "axios";
import moment from "moment";
import {authHeader} from '../Auth/AuthHeader'

// const url = "https://6d742acb-9183-4fec-a58c-fd7f56e3658f.mock.pstmn.io/";
//const url = "http://localhost:1234/";
const url = "http://localhost:8080/"
export const getUsers = (callback) => {
  console.log(authHeader())
  Axios.get(url + "users",{ headers: authHeader()}).then((response) => callback(response.data)).catch((error)=>console.log(console.error()));
};

export const getProjects = (callback) => {
  console.log(authHeader())
  Axios.get(url + "projects",{ headers: authHeader()}).then((response) => callback(response.data)).catch((error)=>console.log(console.error()));
};

export const setUsers = (body) => {
  Axios.post(url + "users", body)
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const signIn = (body,callback,error) => {
  Axios.post(url + "login", body)
  .then(callback)
  .catch(error);
};

export const signUp = (body,callback,error) => {
  Axios.post(url + "register", body)
  .then(callback)
  .catch(error);
};

export const getAuthorizedUserInfo = (callback, errorHandler) => {
  Axios.get(url + "users/info", {headers: authHeader()})
  .then((response) => callback(response.data))
  .catch((error) => errorHandler(error));
};

export const setAuthorizedUserInfo = (data, callback, errorHandler) => {
  Axios.post(url + "users/setInfo", data, {headers: authHeader()})
  .then((response) => callback(response))
  .catch((error) => errorHandler(error));
}

export const setAuthorizedUserPassword = (data, callback, errorHandler) => {
  Axios.post(url + "users/setPassword", {password: data.newPassw, repeatPassword: data.repeatPassw}, {headers: authHeader()})
  .then((response) => callback(response))
  .catch((error) => errorHandler(error));
}

export const getEntries = async (projectID, taskID, userID, date) => {
  const response = await Axios.get(url + "entries/getReport", {
    headers: authHeader(),
    params: {
      projectID: projectID,
      taskID: taskID,
      personID: userID,
      from: moment(date).date(1).hours(0).minutes(0).format('yyyy-MM-DD HH:mm'),
      to: moment(date).date(moment(date).daysInMonth()).hours(23).minutes(59).format('yyyy-MM-DD HH:mm'),
    }
  })
  .catch((error) => console.log(error));

  return response?.data || [];
};

export const getUnpagedProjects = async () => {
  const response = await Axios.get(url + "projects", {
    headers: authHeader(),
    params: {
      unpaged: true,
    },
  })
  .catch(error => console.log(error));

  return response?.data?.content || [];
};

export const getUnpagedTasks = async () => {
  const response = await Axios.get(url + "tasks", {
    headers: authHeader(),
    params: {
      unpaged: true,
    },
  })
  .catch(error => console.log(error));

  return response?.data?.content || [];
};

export const getUnpagedUsers = async () => {
  const response = await Axios.get(url + "users", {
    headers: authHeader(),
    params: {
      unpaged: true,
    },
  })
  .catch(error => console.log(error));

  return response?.data?.content || [];
}