import React from "react";
import "./tool.css";
const Dots = (props) => {
  return (
    <>
      <div className="toggle">
        <div className="display-flex" onClick={props.open}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="pop-box">
          <div className="up-box">
            <p>{props.p}</p>
            <div className="close" onClick={props.close}>
              <i className="fa fa-times "></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dots;
