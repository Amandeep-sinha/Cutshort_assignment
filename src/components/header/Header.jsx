import { React } from "react";
import "../../styles.css";
import "./header.css";

import logo from "../../assets/asset1.png";

export const Header = (props) => {
  const value = props.step;
  return (
    <div>
      <div className="hero">
        <img src={logo} alt="image" />
        <h2>Eden</h2>
      </div>
      <div className="header">
        <div classname="tab">
          <span>
            {" "}
            <div
              className="circle"
              style={
                value >= 1
                  ? { border: "1px solid #664de5", background: "#664de5" }
                  : ({})
              }
            >
              <p>1</p>
            </div>
            <hr
              style={
                value >= 1
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            />
          </span>
        </div>
        <div classname="tab">
          <span>
            {" "}
            <hr
              style={
                value >= 2
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            />
            <div
              className="circle"
              style={
                value >= 2
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            >
              <p>2</p>
            </div>
            <hr
              style={
                value >= 2
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            />
          </span>
        </div>
        <div classname="tab">
          <span>
            {" "}
            <hr
              style={
                value >= 3
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            />
            <div
              className="circle"
              style={
                value >= 3
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            >
              <p>3</p>
            </div>
            <hr
              style={
                value >= 3
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            />
          </span>
        </div>
        <div classname="tab">
          <span>
            {" "}
            <hr
              style={
                value >= 4
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            />
            <div
              className="circle"
              style={
                value >= 4
                  ? { background: "#664de5", border: "1px solid #664de5" }
                  : ({})
              }
            >
              <p>4</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
