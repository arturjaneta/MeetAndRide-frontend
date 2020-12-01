import { BehaviorSubject } from 'rxjs';
import {signIn} from '../common/AxiosService'
import axios from "axios";

const currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser'));
const url = `http://localhost:8080`;

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value },
    setNewToken,
};

function callback(response){
    const user = {token:response.headers.authorization};

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', user.token);
    console.log('Callback: '+localStorage.getItem('currentUser'))
    currentUserSubject.next(user.token);
}

function error(){
    //TODO: handle wrong email or password
    alert("Login error")
    authenticationService.logout();
    window.location.reload(true);
}

function login(username, password) {
    return signIn({username:username,password:password},callback,error)
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function setNewToken(token) {
    localStorage.setItem('currentUser', token);
    currentUserSubject.next(token);
}

export const register = async (body) => {
    await axios.post(`${url}/user/register`, body)
        .catch((error) => 
        alert(error.response.data.msg))
    };