import React from "react";
import "./insight.css";
import Left from "./boxLeft";
import Right from "./boxRight";
import Exp from "../aftercharts/expand";
import Barmenu from "../progressbar/bar";
import Rf from "../progressbar/rF";
import Video from "../progressbar/video";
import Optical from "../progressbar/opticalTheory";
import Multi from "../progressbar/multiplexing";
import Electi from "../progressbar/electrical";
import Network from "../progressbar/network";
import Head from "../progressbar/headEnd";
import Circuit from "../progressbar/circuit";
import Ether from "../progressbar/etherNet";

const Rfexpend = () => {
  var t = document.getElementsByClassName("bar-section")[1];
  var s = document.getElementsByClassName("arrow-display")[8];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};
const Viexpend = () => {
  var t = document.getElementsByClassName("bar-section")[2];
  var s = document.getElementsByClassName("arrow-display")[9];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};

const opti = () => {
  var t = document.getElementsByClassName("bar-section")[3];
  var s = document.getElementsByClassName("arrow-display")[10];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};

const multi = () => {
  var t = document.getElementsByClassName("bar-section")[4];
  var s = document.getElementsByClassName("arrow-display")[11];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};
const elec = () => {
  var t = document.getElementsByClassName("bar-section")[5];
  var s = document.getElementsByClassName("arrow-display")[12];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};
const net = () => {
  var t = document.getElementsByClassName("bar-section")[6];
  var s = document.getElementsByClassName("arrow-display")[13];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};
const head = () => {
  var t = document.getElementsByClassName("bar-section")[7];
  var s = document.getElementsByClassName("arrow-display")[14];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};
const cir = () => {
  var t = document.getElementsByClassName("bar-section")[8];
  var s = document.getElementsByClassName("arrow-display")[15];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};
const eth = () => {
  var t = document.getElementsByClassName("bar-section")[9];
  var s = document.getElementsByClassName("arrow-display")[16];
  if (!t.classList.contains("d-b")) {
    t.classList.add("d-b");
    s.classList.add("swap");
  } else {
    t.classList.remove("d-b");
    s.classList.remove("swap");
  }
};
const Insight = () => {
  return (
    <>
      <div className="insight-container">
        <div className="col-4">
          <div className="header">
            <h1>Insights</h1>
          </div>
          <div className="content">
            {/**Calling left box */}
            <Left
              pstart="Looks like your company's"
              pspan=" Coursework Performance"
              pend=" has increased in several areas since last month. Nice job!"
            />
            {/**Calling left box end ======== */}
            {/**======================= */}
            {/**Calling right box*/}
            <Right
              pstart="Your company's "
              pspan="Wi-Fi competencies"
              pmid=" might need some attention.
          Here are a"
              pspan2="few Courses"
              pend=" you might consider:
          httpz:/bit.ly.kashjf45"
            />
            {/**Calling right box end*/}
            {/**======================= */}
            {/**Calling left box */}
            <Left
              pstart="Did you know that you can customize your"
              pspan=" Company's Home Screen"
              pmid1=" by selecting "
              pspan2="Add to Home"
              pmid2="under the "
              pspan3="Extras Menu?"
              pend=" Just look for the three dots."
            />
            {/**Calling left box end ======== */}
            {/**======================= */}
            {/**Calling right box*/}
            <Right
              pstart="Certification is one of the best ways to keep your company's skills current and remain competitive. Stay on top of your company's "
              pspan="Certification Performance."
            />
            {/**Calling right box end*/}
            {/**======================= */}
            {/**Calling left box */}
            <Left
              pstart="Want to know who your company's"
              pspan=" Top Performers"
              pmid1=" are? You can see them sorted by areas of expertise and get their"
              check={true}
              pspan2=" Member Transcripts"
              pend=" right here."
            />
            {/**Calling left box end ======== */}
          </div>
          <div className="box-img">
            <img
              src="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/chat2.png"
              alt="missing"
            />
          </div>
        </div>
        <div className="col-6">
          {/*Calling bar Component */}
          <div className="bar-section">
            <Barmenu />
          </div>
          {/*Calling bar Component end*/}

          {/*Calling Expend Component */}
          <div>
            <Exp expname="RF" crashme={Rfexpend} />
          </div>
          <div className="bar-section">
            <Rf />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Video" crashme={Viexpend} />
          </div>
          <div className="bar-section">
            <Video />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Optical Theory" crashme={opti} />
          </div>
          <div className="bar-section">
            <Optical />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Multiplexing" crashme={multi} />
          </div>
          <div className="bar-section">
            <Multi />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Electrical Theory" crashme={elec} />
          </div>
          <div className="bar-section">
            <Electi />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Network Data" crashme={net} />
          </div>
          <div className="bar-section">
            <Network />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Headend" crashme={head} />
          </div>
          <div className="bar-section">
            <Head />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Circuit Switch Networks" crashme={cir} />
          </div>
          <div className="bar-section">
            <Circuit />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
          {/*Calling Expend Component */}
          <div>
            <Exp expname="Ethernet" crashme={eth} />
          </div>
          <div className="bar-section">
            <Ether />
          </div>
          {/*Calling Expend Component end*/}
          {/**=============== */}
     

        </div>
      </div>
    </>
  );
};

export default Insight;
