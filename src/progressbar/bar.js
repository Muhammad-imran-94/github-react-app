import React from "react";
import "./bars.css";
import Proglabel from "./label";
import Sugbox from "./sugBox";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const suggopen = () => {
  document.getElementsByClassName("label-suggest")[0].classList.add("d-b-s");
};
const suggclose0 = () => {
  document.getElementsByClassName("label-suggest")[0].classList.remove("d-b-s");
};

const Barmenu = () => {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">Primer WiFi</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}

          <Third />
          {/*Calling middle header 2 close */}

          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}

        <Barstyle color="l-b" w="w-81" />
        <Barstyle color="l-db" w="w-61" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Fundamental WiFi</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-80" />
        <Barstyle color="l-db" w="w-75" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Advance WiFi</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-78" />
        <Barstyle color="l-db" w="w-67" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose0} />
          <label className="lab-left">Intermediate WiFi</label>
          <Proglabel lab="label-org" sugge={suggopen} />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-or" w="w-87" />
        <Barstyle color="l-db" w="w-98" />
        {/*Calling a bar ends */}
      </div>
    </>
  );
};
export default Barmenu;
