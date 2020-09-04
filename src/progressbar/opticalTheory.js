import React from "react";
import "./bars.css";
import Proglabel from "./label";
import Midhead from "./midHead";
import Third from "./thirdHead";
import Barstyle from "./barcontent";
import Sugbox from "./sugBox";

const suggopen2 = () => {
  document.getElementsByClassName("label-suggest")[2].classList.add("d-b-s");
};
const suggclose2 = () => {
  document.getElementsByClassName("label-suggest")[2].classList.remove("d-b-s");
};
const suggopen3 = () => {
  document.getElementsByClassName("label-suggest")[3].classList.add("d-b-s");
};
const suggclose3 = () => {
  document.getElementsByClassName("label-suggest")[3].classList.remove("d-b-s");
};
function Optical(props) {
  return (
    <>
      <div className="bar-div">
        {/**Creating a bar */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose2} />
          <label className="lab-left">Intermediate Optical Theroy</label>
          {/*Calling middle header 1 */}
          <Midhead />
          {/*Calling middle header 1 close */}
          {/*Calling middle header 2 */}
          <Third />
          {/*Calling middle header 2 close */}
          <Proglabel lab="label-org" sugge={suggopen2} />
        </div>
        {/**=============================== */}
        {/*Calling a bar */}
        <Barstyle color="l-or" w="w-69" />
        <Barstyle color="l-db" w="w-82" />
        {/*Calling bar end */}
        {/**Creating a bar end*/}
        {/**========================= */}
        <div className="bar-heading">
          <Sugbox suggcls={suggclose3} />
          <label className="lab-left">Advanced Optical Theroy</label>
          <Proglabel lab="label-org" sugge={suggopen3} />
        </div>
        {/*Calling a bar */}
        <Barstyle color="l-or" w="w-88" />
        <Barstyle color="l-db" w="w-96" />
        {/*Calling a bar ends */}
        {/**========================= */}
      </div>
    </>
  );
}

export default Optical;
