import React from "react";
import "../../styles.css";
import "./selectcard.css";
import user from "../../assets/user3.png";
import group from "../../assets/group1.png";
import user1 from "../../assets/user2.png";
import group1 from "../../assets/group2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Selectcard = () => {
  return (
    <div className="form-div">
      <div className="card-div form-div">
        <div className="card">
          <img src={user1} alt="icon" />
          <h4>For myself</h4>
          <p>Write better. Think more clearly. Stay organised.</p>
        </div>
        <div className="card">
          <img src={group} alt="icon" />
          <h4>With my team</h4>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
      <Link to="/success">
        <button className="btn btn-new">Create Workspace</button>
      </Link>
    </div>
  );
};
