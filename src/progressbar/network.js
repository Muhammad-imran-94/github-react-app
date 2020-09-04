import React from "react";
import "./bars.css";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const Network = () => {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">Intermediate Network Data</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}

          <Third />
          {/*Calling middle header 2 close */}

          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}

        <Barstyle color="l-b" w="w-70" />
        <Barstyle color="l-db" w="w-70" />
        {/*Calling bar end */}
      </div>
    </>
  );
};
export default Network;
