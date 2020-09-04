import React from "react";
import "./leftbox.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Left(props) {
  AOS.init({ duration: 500 });
  return (
    <>
      <div className="box-left" data-aos="fade-right">
        <p>
          {props.pstart}
          <span>{props.pspan}</span>
          {props.pmid1}
          <span>"{props.pspan2}"</span>
          {props.pmid2}
          <span> {props.pspan3}</span>
          {props.pend}
        </p>
      </div>
    </>
  );
}

export default Left;
