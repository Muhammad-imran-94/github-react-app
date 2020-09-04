import React from "react";
import "./bars.css";
import Sugbox from "./sugBox";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const suggopen6 = () => {
  document.getElementsByClassName("label-suggest")[6].classList.add("d-b-s");
};
const suggclose6 = () => {
  document.getElementsByClassName("label-suggest")[6].classList.remove("d-b-s");
};

const suggopen7 = () => {
  document.getElementsByClassName("label-suggest")[7].classList.add("d-b-s");
};
const suggclose7 = () => {
  document.getElementsByClassName("label-suggest")[7].classList.remove("d-b-s");
};
const Ether = () => {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">Fundamental Ethernet</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}

          <Third />
          {/*Calling middle header 2 close */}

          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}

        <Barstyle color="l-b" w="w-84" />
        <Barstyle color="l-db" w="w-40" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose6} />
          <label className="lab-left">Primer Ethernet</label>
          <Proglabel lab="label-org" sugge={suggopen6} />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-or" w="w-89" />
        <Barstyle color="l-db" w="w-94" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose7} />
          <label className="lab-left">Intermediate Ethernet</label>
          <Proglabel lab="label-org" sugge={suggopen7} />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-or" w="w-80" />
        <Barstyle color="l-db" w="w-96" />
        {/*Calling a bar ends */}
        <div className="pad-ehter"></div>
      </div>
    </>
  );
};
export default Ether;
