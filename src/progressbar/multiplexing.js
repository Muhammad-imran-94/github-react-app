import React from "react";
import "./bars.css";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const Multi = () => {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">Fundamental Multiplexing</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}

          <Third />
          {/*Calling middle header 2 close */}

          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}

        <Barstyle color="l-b" w="w-96" />
        <Barstyle color="l-db" w="w-33" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Advanced Multiplexing</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-87" />
        <Barstyle color="l-db" w="w-83" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Intermediate Multiplexing</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-96" />
        <Barstyle color="l-db" w="w-80" />
        {/*Calling a bar ends */}
      </div>
    </>
  );
};
export default Multi;
