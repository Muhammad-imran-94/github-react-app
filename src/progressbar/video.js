import React from "react";
import "./bars.css";
import Sugbox from "./sugBox";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";

const suggopen1 = () => {
  document.getElementsByClassName("label-suggest")[1].classList.add("d-b-s");
};
const suggclose1 = () => {
  document.getElementsByClassName("label-suggest")[1].classList.remove("d-b-s");
};
function Video(props) {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <label className="lab-left">Advance Video</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}
          <Third />
          {/*Calling middle header 2 close */}
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-90" />
        <Barstyle color="l-db" w="w-68" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Fundamental Video</label>
          <Proglabel lab="label-colr" />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-93" />
        <Barstyle color="l-db" w="w-70" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose1} />
          <label className="lab-left">Primer Video</label>
          <Proglabel lab="label-org" sugge={suggopen1} />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-or" w="w-91" />
        <Barstyle color="l-db" w="w-93" />
        {/*Calling a bar ends */}
        {/**========================= */}
        <div className="bar-heading">
          <label className="lab-left">Intermediate Video</label>
          <Proglabel />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-b" w="w-92" />
        <Barstyle color="l-db" w="w-70" />
        {/*Calling a bar ends */}
      </div>
    </>
  );
}

export default Video;
