import React from "react";
import "./bars.css";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

function Rf(props) {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">Primer RFe</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}
          <Third />
          {/*Calling middle header 2 close */}
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-82" />
        <Barstyle color="l-db" w="w-95" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Advance RF</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-95" />
        <Barstyle color="l-db" w="w-70" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Intermediate RF</label>
          <Proglabel />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-96" />
        <Barstyle color="l-db" w="w-85" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Fundamental RF</label>
          <Proglabel />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-92" />
        <Barstyle color="l-db" w="w-90" />
        {/*Calling a bar ends */}
      </div>
    </>
  );
}

export default Rf;
