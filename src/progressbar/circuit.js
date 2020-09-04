import React from "react";
import "./bars.css";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const Circuit = () => {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">
            Fundamental Circuit Switched Networks
          </label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}

          <Third />
          {/*Calling middle header 2 close */}

          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}

        <Barstyle color="l-b" w="w-93" />
        <Barstyle color="l-db" w="w-50" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">
            Intermediate Circuit Switched Networks
          </label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-93" />
        <Barstyle color="l-db" w="w-82" />
        {/*Calling a bar ends */}
      </div>
    </>
  );
};
export default Circuit;
