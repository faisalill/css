import React from "react";
import CharacterPng from "../assets/character-min.png";
import "../css/FirstContainer.css";
const FirstContainer = () => {
  return (
    <div className="firstcontainer">
      <div className="text-container">
        <h1 className="text-header"> Glassmorphic UI</h1>
        <p className="text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores soluta laboriosam eaque quo inventore nisi quaerat neque earum cupiditate corporis ex voluptatibus, debitis obcaecati ipsam vero aut optio dignissimos eveniet placeat ipsum? Vitae rem animi ab, consectetur earum dolorem officiis eligendi, reiciendis commodi totam consequuntur omnis qui dicta optio, temporibus dolorum sint repellat autem? Libero nobis ducimus tempora voluptates!</p>
        <h5 className="text-h5">Read More</h5>
      </div>
      <div className="character-container">
        <img src={CharacterPng} className="character-img" />
      </div>
    </div>
  );
};

export default FirstContainer;
