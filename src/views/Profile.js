import React from "react";
import user  from '../assets/user.svg'
import "./style/Menu.css";
import "../App.css";
import MenuButton from "../button/MenuButton";

const Profile = () => {
  return (
    <>
      <div className="menu">
        <MenuButton />
      </div>
      <div className="App">
        <header className="App-profile">
          <img className="App-logo" src={user} alt="user" />
          <h3>Profile</h3>
        </header>
      </div>
    </>
  );
};

export default Profile;
