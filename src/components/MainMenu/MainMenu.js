import React from "react";
import logo from "../../assets/meetandride.png";
import "./MainMenu.style.css";
import MenuItem from "./MenuItem";
import { authenticationService } from '../Auth/AuthService';
import {
  faClock,
  faFile,
  faMotorcycle,
  faRoute,
  faProjectDiagram,
  faTasks,
  faUserFriends,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
const MainMenu = () => {
  const logout = () =>{
    authenticationService.logout()
  }

  return (
    <aside className="offwhite-bgrd menu px-4 full-height">
      <img src={logo} alt="meetandride logo" className="py-4 px-4"></img>
      <ul className="menu-list">
        <MenuItem navTo="/find" icon={faRoute} text="Find trip" />
        <MenuItem navTo="/mytrips" icon={faMotorcycle} text="My trips" />
        <MenuItem navTo="/users" icon={faUserFriends} text="Users" />
        <MenuItem navTo="/account" icon={faUser} text="Account" />
        <MenuItem navTo="/signout" icon={faSignOutAlt} text="Log out" onClick={logout}/>
      </ul>
    </aside>
  );
};

export default MainMenu;
