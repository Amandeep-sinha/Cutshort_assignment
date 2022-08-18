import React from "react";
import "../../styles.css";
import "./content.css";
import logo from "../../assets/asset1.png";

export const Content = (props) => {
  return (
    <div className="content-div">
      <h2>{props.head}</h2>
      <p className="content-text">{props.text}</p>
    </div>
  );
};
