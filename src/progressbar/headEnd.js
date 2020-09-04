import React from "react";
import "./bars.css";
import Proglabel from "./label";
import Sugbox from "./sugBox";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const suggopen5 = () => {
  document.getElementsByClassName("label-suggest")[5].classList.add("d-b-s");
};
const suggclose5 = () => {
  document.getElementsByClassName("label-suggest")[5].classList.remove("d-b-s");
};
const Head = () => {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">Intermediate Headend</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}

          <Third />
          {/*Calling middle header 2 close */}

          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}

        <Barstyle color="l-b" w="w-56" />
        <Barstyle color="l-db" w="w-40" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Fundamental Headend</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-93" />
        <Barstyle color="l-db" w="w-80" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Primer Headend</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-95" />
        <Barstyle color="l-db" w="w-75" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose5} />
          <label className="lab-left">Advanced Headend</label>
          <Proglabel lab="label-org" sugge={suggopen5} />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-94" />
        <Barstyle color="l-db" w="w-93" />
        {/*Calling a bar ends */}
      </div>
    </>
  );
};
export default Head;
