import React from "react";
import "./right.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Right = (props) => {
  AOS.init({ duration: 500 });
  return (
    <>
      <div className="box-right" data-aos="fade-left">
        <p>
          {props.pstart} <span>{props.pspan}</span> {props.pmid}
          <span>{props.pspan2}</span> {props.pend}
        </p>
      </div>
    </>
  );
};
export default Right;
