import React from "react";
import "../App.css";
import MenuButton from "../button/MenuButton";

const Explore = () => {
  return (
    <>
      <div className="menu">
        <MenuButton />
      </div>
      <div className="App">
        <header className="App-explore">
          <h3>Explore</h3>
        </header>
      </div>
    </>
  );
};

export default Explore;
