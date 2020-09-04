import React from "react";
import "./cardstyle.css";

const Card = (props) => {
  return (
    <>
      <div className="position-rel pad-box">
        <div className="flex just-space height-yy al-item ">
          <div className="flex " onClick={props.click}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            {props.icon ? <i className="fa fa-exclamation-triangle"></i> : ""}
          </div>
        </div>
        <div className="upper-text position-abso">
          <div className="pop-content">
            <div className="text">
              <p>{props.para}</p>
            </div>
            <div className="closer cl-toll" onClick={props.closer}>
              <i className="fa fa-times "></i>
            </div>
          </div>
        </div>

        <div className="text-container" onClick={props.boxx}>
          <h6>{props.heading}</h6>
          <h5 className="wh-color flex-end pad ">
            <sup>{props.upsymbol1}</sup>
            <span className="first">{props.updigit1}</span>
            <span className="extra">{props.updigit2}</span>
            <sup>{props.upsymbol2}</sup>
          </h5>
        </div>
        <div className="text-container" onClick={props.boxx}>
          <h5 className="gr-color">
            <span className="first">{props.midvalue1}</span>
            <span className="extra">{props.midvalue2}</span>
            <sup>{props.midsymbol}</sup>
          </h5>
        </div>
        <div
          className="text-container bottom-text spc-btwn bg-black"
          onClick={props.boxx}
        >
          <div>
            <p>{props.lowetexr}</p>
          </div>
          <div>
            <img src={props.lowerimg} alt="arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
