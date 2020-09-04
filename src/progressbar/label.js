/* eslint-disable no-useless-concat */
import React from "react";
import "./lab.css";

function Proglabel(props) {
  return (
    <>
      <label className={"label-colr " + " " + props.lab} onClick={props.sugge}>
        Suggestions
      </label>
    </>
  );
}

export default Proglabel;
