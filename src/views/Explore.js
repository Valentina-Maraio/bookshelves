import React from "react";
import "../App.css";
import MenuButton from "../button/MenuButton";
import books from '../data/books.json'
import './style/Explore.css'

const Explore = () => {
  return (
    <>
      <div className="menu">
        <MenuButton />
      </div>
      <div className="App">
        <header className="App-explore">
          <h3>Explore</h3>
          <div>
            {books?.books?.map((item) => {
              return(
                <div className="card_box" key={item.id}>
                  <h4>{item.title}</h4>
                  <h5>{item.author}</h5>
                </div>
              )
            })}
          </div>
        </header>
      </div>
    </>
  );
};

export default Explore;
