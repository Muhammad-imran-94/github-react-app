import React from "react";
import "./lab.css";

const Sugbox = (props) => {
  return (
    <>
      <div className="label-suggest">
        <div className="suggest-upper">
          <div className="left-side">
            <i className="fa fa-exclamation-triangle"></i>
          </div>
          <div className="right-side">
            <span>Suggestions</span>
            <i className="fa fa-times" onClick={props.suggcls}></i>
          </div>
        </div>
        <div className="suggest-lower">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout . The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here',
            <br />
            <br />
            making it look like readable English.
          </p>
          <div className="sec-btn">
            <button className="orange-button btns">Sound Good</button>
            <button className="black-button btns">No thanks</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sugbox;
