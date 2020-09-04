import React from "react";
import "./expend.css";
const Exp = (props) => {
  return (
    <>
      <div className="expand-container">
        <div className="right" onClick={props.crashme}>
          <div className="arrow-display">
            <i className="fas fa-angle-up"></i>
            <i className="fas fa-angle-down"></i>
          </div>
          <p>{props.expname}</p>
        </div>
        <div className="left">
          <div className="display-flex">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exp;
