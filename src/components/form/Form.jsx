import React from "react";
import "../../styles.css";
import "./form.css";
import { Link } from "react-router-dom";

export const Form = (props) => {
  return (
    <div className="form-div">
      <form action="submit">
        <label>{props.label1}</label>
        <input type="text" placeholder={props.placeholder1} />
        <label>{props.label2}</label>
        {props.url == null && (
          <input type="text" placeholder={props.placeholder2} />
        )}
        {props.url != null && (
          <>
            {" "}
            <div class="input">
              <div className="gray">
                <span>{props.url}</span>
              </div>
              <input type="text" placeholder="Example" />
            </div>
          </>
        )}
        <Link to={props.path}>
          <button className="btn">{props.btntext}</button>
        </Link>
      </form>
    </div>
  );
};
