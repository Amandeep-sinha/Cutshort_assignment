// import React from "react";
import "../styles.css";
import check from "../assets/check.png";
import { Content, Header } from "../components";
// import  Header  from "../components";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <Header step={4} />
      <div className="form-div">
        <img className="check" src={check} alt="image" />
      </div>
      <Content
        head="Congratulations, Eren!"
        text="You have completed onboarding, you can start using the Eden!"
      />
      <div className="form-div">
        {" "}
        <Link to="/">
          {" "}
          <button className="btn">Launch Eden</button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
}
