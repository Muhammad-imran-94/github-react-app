/* eslint-disable no-useless-concat */
import React from "react";
import "./barstyl.css";

const Barstyle = (props) => {
  return (
    <>
      <div className="barstyle">
        <div className="outer-div">
          <div
            className={"inner-div" + " " + props.color + " " + props.w}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Barstyle;
