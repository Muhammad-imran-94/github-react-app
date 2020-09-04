import React from "react";
import "./bars.css";
import Sugbox from "./sugBox";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const suggopen4 = () => {
  document.getElementsByClassName("label-suggest")[4].classList.add("d-b-s");
};
const suggclose4 = () => {
  document.getElementsByClassName("label-suggest")[4].classList.remove("d-b-s");
};
const Electi = () => {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose4} />
          <label className="lab-left">Intermediate Electrical Theory</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}

          <Third />
          {/*Calling middle header 2 close */}

          <Proglabel lab="label-org" sugge={suggopen4} />
        </div>
        {/*Calling a bar */}

        <Barstyle color="l-or" w="w-9" />
        <Barstyle color="l-db" w="w-82" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Fundamental Electrical Theory</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-72" />
        <Barstyle color="l-db" w="w-30" />
        {/*Calling a bar ends */}
      </div>
    </>
  );
};
export default Electi;
