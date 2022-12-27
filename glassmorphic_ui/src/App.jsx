import React, { useState } from "react";
import CharacterImage from "./assets/character.png";
import Tilt from "react-tilt";
import "./App.css";
import ListTile from "./Component/ListTile";
import LoginForm from "./Component/LoginForm";
const App = () => {
  const [DarkMode, setDarkMode] = useState(true);
  return (
    <>
      <div className={DarkMode ? "background-dark" : "background-light"}>
        <div className="page-container">
          <div
            className={DarkMode ? "navbar navbar-dark" : "navbar navbar-light"}
          >
            <h2>Logo</h2>
            <ul>
              <li className="not-menu">
                <a href="#">Home</a>
              </li>
              <li className="not-menu">
                <a href="#">About</a>
              </li>
              <li className="not-menu">
                <a href="#">Github</a>
              </li>
              <li className="not-menu">
                <a href="#">Twitter</a>
              </li>
              <li className="menu">Menu</li>
            </ul>
          </div>
          <div className="container">
            <div className={DarkMode ? "text text-dark" : "text text-light"}>
              <h1>Glassmorphic UI</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ad doloremque iure dolor eos. Est nostrum blanditiis laboriosam
                eius cum, numquam Lorem, ipsum Lorem, ipsum dolor.
              </p>
              <p className="hide">
                distinctio repudiandae velit tenetur ratione aliquid architecto
                ipsa ea quibusdam, enim molestias magnam assumenda?
              </p>
              <span>Read More</span>
            </div>
            <Tilt>
            <div
              className={
                DarkMode
                  ? "character character-dark"
                  : "character character-light"
              }
            >
              <img src={CharacterImage} className="characterImage" />
            </div>
            </Tilt>
            <div className={DarkMode ? "component-bar dark" : "component light"}>Components</div>
            <div className={DarkMode ? "list dark" : "list light"}>
              <ListTile DarkMode={DarkMode}/>
            </div>
            <div className={DarkMode ? "login dark" : "login light"}><LoginForm /></div>
          </div>
          <div className="footer-container">
            <footer
              className={
                DarkMode ? "footer footer-dark" : "footer footer-light"
              }
            >
              <h2>Copyright &copy; All Rights Reserved</h2>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
