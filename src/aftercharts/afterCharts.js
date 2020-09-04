import React from "react";
import "./after.css";
import Dots from "../tool/toolTip";
import Exp from "./expand";

const toggle1 = () => {
  var v = document.getElementsByClassName("pop-box")[2];
  v.classList.add("d-f");
};

const toggle2 = () => {
  var v = document.getElementsByClassName("pop-box")[3];
  v.classList.add("d-f");
};
const close1 = () => {
  var cl = document.getElementsByClassName("pop-box")[2];
  cl.classList.remove("d-f");
};

const close2 = () => {
  var cl = document.getElementsByClassName("pop-box")[3];
  cl.classList.remove("d-f");
};

const expend = () => {
  if (
    !document.getElementsByClassName("bar-section")[0].classList.contains("d-b")
  ) {
    document.getElementsByClassName("bar-section")[0].classList.add("d-b");
    document.getElementsByClassName("arrow-display")[7].classList.add("swap");
  } else {
    document.getElementsByClassName("bar-section")[0].classList.remove("d-b");
    document
      .getElementsByClassName("arrow-display")[7]
      .classList.remove("swap");
  }
};

const openpanel = () => {
  document.getElementsByClassName("addmore-exp")[0].classList.add("d-b");
};

const closepanel = () => {
  document.getElementsByClassName("addmore-exp")[0].classList.remove("d-b");
};
const Addmore = () => {
  return (
    <>
      <div className="add-container">
        <div className="display-flex">
          <div className="col-4 display-flex space-btwn ">
            <div className="col-4-3 pad-left">
              {/*Calling Toggles */}
              <Dots
                open={toggle1}
                close={close1}
                p="Average time to complete a course."
              />
              {/*Calling Toggles ends*/}
              <div className="header-text">
                <h3>
                  Course Duration Average
                  <br />
                  <span >(in days)</span>
                </h3>
              </div>
            </div>
            <div className="col-4-3 pad-y">
              {/*Calling Toggles */}
              <Dots
                open={toggle2}
                close={close2}
                p="Average time to complete a course."
              />
              {/*Calling Toggles ends*/}
              <div className="header-text">
                <h3>Single Engagement</h3>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="right-col">
              <div className="addmore">
                <i className="fa fa-th" onClick={openpanel}></i>
                <span onClick={openpanel}>Add More</span>
                <div className="addmore-exp">
                  <div className="add-closer">
                    <i className="fa fa-times " onClick={closepanel}></i>
                  </div>
                  <div className="addmore-exp-firstchild">
                    <div className="addmore-exp-right">
                      <i className="fa fa-window-close"></i>
                      <p>Wifi</p>
                    </div>
                    <div className="addmore-exp-left">
                      <div className="left-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <Exp expname="Access Network" />
                  <Exp expname="Cabling" />
                  <Exp expname="DOCSIS" />
                  <Exp expname="Headend" />
                  <Exp expname="Home Networking" />
                  <Exp expname="Video" />
                  <Exp expname="VOIP" />
                </div>
              </div>
              <Exp expname="Wifi" crashme={expend} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addmore;
