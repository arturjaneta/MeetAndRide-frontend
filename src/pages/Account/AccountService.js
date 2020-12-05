import axios from "axios";
import {authHeader} from '../../components/Auth/AuthHeader'

const url = `http://localhost:8080`;

export const changeNames = async (firstName,lastName) => {
await axios.patch(`${url}/user/name`,{
}, {headers: authHeader(), params:
{
    firstName:firstName,
    lastName:lastName
}})
    .catch((error) => alert(error.message));
};

export const changePassword = async (password) => {
    await axios.patch(`${url}/user`,{
    }, {headers: authHeader(), params:
    {
        password:password
    }})
        .catch((error) => alert(error.message));
    };

    export const addMotorcycle = async (body) => {
        await axios.post(`${url}/user/addmotorcycle`,body,{headers: authHeader()})
            .catch((error) => alert(error.message));
        };