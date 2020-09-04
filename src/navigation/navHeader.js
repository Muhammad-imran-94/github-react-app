/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import React from "react";
import Card from "../card/cardData";
import "./nav.css";
import Popbox from "../card/popBox";

const click1 = () => {
  var b = document.getElementsByClassName("upper-text")[0];
  b.classList.add("df");
  var b = document.getElementsByClassName("upper-text")[4];
  b.classList.remove("df");
};
const click2 = () => {
  var b = document.getElementsByClassName("upper-text")[1];
  b.classList.add("df");
  var b = document.getElementsByClassName("upper-text")[0];
  b.classList.remove("df");
};
const click3 = () => {
  var b = document.getElementsByClassName("upper-text")[2];
  b.classList.add("df");
  var b = document.getElementsByClassName("upper-text")[1];
  b.classList.remove("df");
};
const click4 = () => {
  var b = document.getElementsByClassName("upper-text")[3];
  b.classList.add("df");
  var b = document.getElementsByClassName("upper-text")[2];
  b.classList.remove("df");
};
const click5 = () => {
  var b = document.getElementsByClassName("upper-text")[4];
  b.classList.add("df");
  var b = document.getElementsByClassName("upper-text")[3];
  b.classList.remove("df");
};

const closer1 = () => {
  var a = document.getElementsByClassName("upper-text")[0];
  a.classList.remove("df");
};
const closer2 = () => {
  var a = document.getElementsByClassName("upper-text")[1];
  a.classList.remove("df");
};

const closer3 = () => {
  var a = document.getElementsByClassName("upper-text")[2];
  a.classList.remove("df");
};

const closer4 = () => {
  var a = document.getElementsByClassName("upper-text")[3];
  a.classList.remove("df");
};
const closer5 = () => {
  var a = document.getElementsByClassName("upper-text")[4];
  a.classList.remove("df");
};

const hitme = () => {
  var a = document.getElementsByClassName("h-box")[0];
  a.classList.remove("h-box-db");
};
const hitme1 = () => {
  var a = document.getElementsByClassName("h-box")[1];
  a.classList.remove("h-box-db");
};
const hitme2 = () => {
  var a = document.getElementsByClassName("h-box")[2];
  a.classList.remove("h-box-db");
};
const hitme3 = () => {
  var a = document.getElementsByClassName("h-box")[3];
  a.classList.remove("h-box-db");
};
const hitme4 = () => {
  var a = document.getElementsByClassName("h-box")[4];
  a.classList.remove("h-box-db");
};

const openbox = () => {
  var x = document.getElementsByClassName("h-box")[0];
  x.classList.add("h-box-db");
};
const openbox1 = () => {
  var x = document.getElementsByClassName("h-box")[1];
  x.classList.add("h-box-db");
};
const openbox2 = () => {
  var x = document.getElementsByClassName("h-box")[2];
  x.classList.add("h-box-db");
};
const openbox3 = () => {
  var x = document.getElementsByClassName("h-box")[3];
  x.classList.add("h-box-db");
};
const openbox4 = () => {
  var x = document.getElementsByClassName("h-box")[4];
  x.classList.add("h-box-db");
};
// Funstionality for pop-up cards include clenders strats ///
// Card One click functions//
const smashme = () => {
  var d = document.getElementsByClassName("row-content")[0];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};

const smashme2 = () => {
  var d = document.getElementsByClassName("row-content")[1];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};
const expview = () => {
  var y = document.getElementsByClassName("h-performers")[0];
  if (y.classList.contains("d-no")) {
    y.classList.remove("d-no");
  } else {
    y.classList.add("d-no");
  }
};
const charter = () => {
  var l = document.getElementsByClassName("chart-exp")[0];
  var g = document.getElementsByClassName("custom-view")[0];
  if (!l.classList.contains("w-green-cus")) {
    l.classList.add("w-green-cus");
    g.classList.add("w-green-cus");
  } else {
    l.classList.remove("w-green-cus");
    g.classList.remove("w-green-cus");
  }
  var e = document.getElementsByClassName("chart-box")[0];
  if (e.classList.contains("d-no")) {
    e.classList.remove("d-no");
    e.classList.add("in-d-b");
  } else {
    e.classList.add("d-no");
  }
};
const perfor = () => {
  var q = document.getElementsByClassName("performers")[0];
  var w = document.getElementsByClassName("top-perfor")[0];
  var e = document.getElementsByClassName("performers-content")[0];
  var r = document.getElementsByClassName("performers-content")[1];
  var t = document.getElementsByClassName("performers-content")[2];
  if (q.classList.contains("d-no")) {
    q.classList.remove("d-no");
    w.classList.add("active-perfor-bg");
    e.classList.add("div:hover");
    r.classList.add("div:hover");
    t.classList.add("div:hover");
  } else {
    q.classList.add("d-no");
    w.classList.remove("active-perfor-bg");
  }
};
// Card One click functions ends//
// Card 2 click functions//
const mashme = () => {
  var d = document.getElementsByClassName("row-content")[2];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};

const mashme2 = () => {
  var d = document.getElementsByClassName("row-content")[3];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};

const expview2 = () => {
  var y = document.getElementsByClassName("h-performers")[1];
  if (y.classList.contains("d-no")) {
    y.classList.remove("d-no");
  } else {
    y.classList.add("d-no");
  }
};

const charter1 = () => {
  var l = document.getElementsByClassName("chart-exp")[1];
  var g = document.getElementsByClassName("custom-view")[1];
  if (!l.classList.contains("w-pink-cus")) {
    l.classList.add("w-pink-cus");
    g.classList.add("w-pink-cus");
  } else {
    l.classList.remove("w-pink-cus");
    g.classList.remove("w-pink-cus");
  }
  var e = document.getElementsByClassName("chart-box")[1];
  if (e.classList.contains("d-no")) {
    e.classList.remove("d-no");
    e.classList.add("in-d-b");
  } else {
    e.classList.add("d-no");
  }
};
const pperfor = () => {
  var q = document.getElementsByClassName("performers")[1];
  var w = document.getElementsByClassName("top-perfor")[1];
  if (q.classList.contains("d-no")) {
    q.classList.remove("d-no");
    w.classList.add("active-perfor-bg");
  } else {
    q.classList.add("d-no");
    w.classList.remove("active-perfor-bg");
  }
};
// Card 2 click functions ends//
// Card 3 click functions//
const ashme = () => {
  var d = document.getElementsByClassName("row-content")[4];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};

const ashme2 = () => {
  var d = document.getElementsByClassName("row-content")[5];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};
const expview3 = () => {
  var y = document.getElementsByClassName("h-performers")[2];
  if (y.classList.contains("d-no")) {
    y.classList.remove("d-no");
  } else {
    y.classList.add("d-no");
  }
};

const charter2 = () => {
  var l = document.getElementsByClassName("chart-exp")[2];
  var g = document.getElementsByClassName("custom-view")[2];
  if (!l.classList.contains("w-purple-cus")) {
    l.classList.add("w-purple-cus");
    g.classList.add("w-purple-cus");
  } else {
    l.classList.remove("w-purple-cus");
    g.classList.remove("w-purple-cus");
  }
  var e = document.getElementsByClassName("chart-box")[2];
  if (e.classList.contains("d-no")) {
    e.classList.remove("d-no");
    e.classList.add("in-d-b");
  } else {
    e.classList.add("d-no");
  }
};
const ppperfor = () => {
  var q = document.getElementsByClassName("performers")[2];
  var w = document.getElementsByClassName("top-perfor")[2];
  if (q.classList.contains("d-no")) {
    q.classList.remove("d-no");
    w.classList.add("active-perfor-bg");
  } else {
    q.classList.add("d-no");
    w.classList.remove("active-perfor-bg");
  }
};
// Card 3 click functions ends//
// Card 4 click functions//
const shme = () => {
  var d = document.getElementsByClassName("row-content")[6];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};

const shme2 = () => {
  var d = document.getElementsByClassName("row-content")[7];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};
const expview4 = () => {
  var y = document.getElementsByClassName("h-performers")[3];
  if (y.classList.contains("d-no")) {
    y.classList.remove("d-no");
  } else {
    y.classList.add("d-no");
  }
};
const charter3 = () => {
  var l = document.getElementsByClassName("chart-exp")[3];
  var g = document.getElementsByClassName("custom-view")[3];
  if (!l.classList.contains("w-blue-cus")) {
    l.classList.add("w-blue-cus");
    g.classList.add("w-blue-cus");
  } else {
    l.classList.remove("w-blue-cus");
    g.classList.remove("w-blue-cus");
  }
  var e = document.getElementsByClassName("chart-box")[3];
  if (e.classList.contains("d-no")) {
    e.classList.remove("d-no");
    e.classList.add("in-d-b");
  } else {
    e.classList.add("d-no");
  }
};
const pppperfor = () => {
  var q = document.getElementsByClassName("performers")[3];
  var w = document.getElementsByClassName("top-perfor")[3];
  if (q.classList.contains("d-no")) {
    q.classList.remove("d-no");
    w.classList.add("active-perfor-bg");
  } else {
    q.classList.add("d-no");
    w.classList.remove("active-perfor-bg");
  }
};
// Card 4 click functions ends//
// Card 5 click functions//
const hme = () => {
  var d = document.getElementsByClassName("row-content")[8];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};

const hme2 = () => {
  var d = document.getElementsByClassName("row-content")[9];
  if (!d.classList.contains("in-d-b")) {
    d.classList.add("in-d-b");
  } else {
    d.classList.remove("in-d-b");
  }
};
const expview5 = () => {
  var y = document.getElementsByClassName("h-performers")[4];
  if (y.classList.contains("d-no")) {
    y.classList.remove("d-no");
  } else {
    y.classList.add("d-no");
  }
};

const charter4 = () => {
  var l = document.getElementsByClassName("chart-exp")[4];
  var g = document.getElementsByClassName("custom-view")[4];
  var x = document.getElementsByClassName("chart-box")[4];
  var xc = document.getElementsByClassName("pad-last-2")[8];
  var xcc = document.getElementsByClassName("pad-last-2")[9];
  if (!l.classList.contains("w-orange-cus")) {
    l.classList.add("w-orange-cus");
    g.classList.add("w-orange-cus");
    x.classList.add("ch-pos");
    xc.classList.add("ch-pos");
    xcc.classList.add("ch-pos");
  } else {
    l.classList.remove("w-orange-cus");
    g.classList.remove("w-orange-cus");
    x.classList.remove("ch-pos");
    xc.classList.remove("ch-pos");
    xcc.classList.remove("ch-pos");
  }
  var e = document.getElementsByClassName("chart-box")[4];
  if (e.classList.contains("d-no")) {
    e.classList.remove("d-no");
    e.classList.add("in-d-b");
  } else {
    e.classList.add("d-no");
  }
};
const ppppperfor = () => {
  var q = document.getElementsByClassName("performers")[4];
  var w = document.getElementsByClassName("top-perfor")[4];
  if (q.classList.contains("d-no")) {
    q.classList.remove("d-no");
    w.classList.add("active-perfor-bg");
  } else {
    q.classList.add("d-no");
    w.classList.remove("active-perfor-bg");
  }
};
// Card 5 click functions ends//
// Funstionality for pop-up cards include clenders ends  ///
// Main navigational Component starts  ///
const Nav = () => {
  return (
    <>
      <section className="back-img">
        <div className="flex-row padding-nav">
          <div className="flex-col">
            <div className="flex pad-y">
              <div className="logo">
                <h1>Charter</h1>
              </div>
              <div className="logo-img">
                <img src="charter-logo.png" alt="missimg" />
              </div>
            </div>
            <div>
              <ul className="list-item">
                <li>
                  <a href="Home">Home</a>
                </li>
                <li>
                  <a href="Coursework">Coursework</a>
                </li>
                <li>
                  <a href="Certification">Certification</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <ul className="mid-nav flex-row">
              <li>
                <a href="Dashboard" className="active-nav first-child">
                  Dashboard
                </a>
              </li>
              <li>
                <a href=" Change" className="second-child">
                  Change Setting
                </a>
              </li>
              <li>
                <a href="Export/Share">Export / Share</a>
              </li>
              <li>
                <a href="FAQS">Support / FAQs</a>
              </li>
              <li>
                <a href="Log Out">Log Out</a>
              </li>
            </ul>
          </div>

          <div className="right-nav">
            <div className="right-img">
              <img
                src="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/text.png"
                alt="missimg"
                style={{ width: "140px", marginLeft: "28px" }}
              />
            </div>
            <p>Company View</p>
            <h4>Home</h4>
          </div>
        </div>
        {/*Navigation Section ends */}

        {/*Cards Section start */}
        {/*Cards 1 start */}
        <div className="box-image">
          <div className="box-container">
            <div className="box-style ">
              {/**Calling onclick box */}
              <div className="h-box h-box-width">
                <Popbox
                  popheading="Course Performance"
                  bg="bgcl-green"
                  hover_green="green-h"
                  linebg="view-all-performers-green-bg"
                  action={hitme}
                  trigger={smashme}
                  trigger2={smashme2}
                  per={perfor}
                  viewteam={expview}
                  grow={charter}
                />
              </div>
              {/**Calling onclick box ends*/}
              <Card
                click={click1}
                closer={closer1}
                boxx={openbox}
                para="Indicates average performance in courses that are passed by team members"
                heading="Course Performance"
                upsymbol1="+"
                updigit1="0"
                updigit2=".1"
                upsymbol2="%"
                midvalue1="87"
                midvalue2=".9"
                midsymbol="%"
                lowetexr="Company Avg Score vs Others"
                lowerimg="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/arrow_up.png"
              />
            </div>
            <div className="box-style ">
              {/**Calling onclick box */}
              <div className="h-box h-box-width">
                <Popbox
                  popheading="Certification Performance"
                  bg="bgcl-pink"
                  hover_pink="pink-h"
                  pinkbg="view-all-performers-pink-bg"
                  action={hitme1}
                  trigger={mashme}
                  trigger2={mashme2}
                  per={pperfor}
                  viewteam={expview2}
                  grow={charter1}
                />
              </div>
              {/**Calling onclick box ends*/}
              <Card
                click={click2}
                closer={closer2}
                boxx={openbox1}
                icon={true}
                para="Certifications completed from within total certifications attempted by team members of this company."
                heading="Certification Performance"
                upsymbol1="-"
                updigit1="2"
                updigit2=".1"
                upsymbol2="%"
                midvalue1="78"
                midvalue2=".6"
                midsymbol="%"
                lowetexr="Company Avg Score vs Others"
                lowerimg="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/arrow_down.png"
              />
            </div>
            <div className="box-style ">
              {/**Calling onclick box */}
              <div className="h-box h-box-widthpu">
                <Popbox
                  popheading="Courses - Completion Rate"
                  bg="bgcl-purple"
                  hover_purple="purple-h"
                  purplebg="view-all-performers-purple-bg"
                  action={hitme2}
                  trigger={ashme}
                  trigger2={ashme2}
                  per={ppperfor}
                  viewteam={expview3}
                  grow={charter2}
                />
              </div>
              {/**Calling onclick box ends*/}
              <Card
                click={click3}
                closer={closer3}
                boxx={openbox2}
                icon={true}
                para="Courses completed from within total courses attempted by team members of this company."
                heading="Courses - Completion Rate"
                upsymbol1="-"
                updigit1="8"
                updigit2=".63"
                upsymbol2="%"
                midvalue1="30"
                midvalue2=".16"
                midsymbol="%"
                lowetexr="Company Avg Score vs Others"
                lowerimg="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/arrow_down.png"
              />
            </div>
            <div className="box-style ">
              {/**Calling onclick box */}
              <div className="h-box h-box-width left-pos org-width">
                <Popbox
                  popheading="Course Pass Rate"
                  bg="bgcl-blue"
                  bluebg="view-all-performers-blue-bg"
                  hover_blue="blue-h"
                  action={hitme3}
                  trigger={shme}
                  trigger2={shme2}
                  per={pppperfor}
                  viewteam={expview4}
                  grow={charter3}
                />
              </div>
              {/**Calling onclick box ends*/}
              <Card
                click={click4}
                closer={closer4}
                boxx={openbox3}
                para="Percentage of courses passed against courses attempted."
                heading="Course Pass Rate"
                upsymbol1="+"
                updigit1="3"
                updigit2=".41"
                upsymbol2="%"
                midvalue1="98"
                midvalue2=".41"
                midsymbol="%"
                lowetexr="Company Avg Score vs Others"
                lowerimg="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/arrow_up.png"
              />
            </div>
            <div className="box-style ">
              {/**Calling onclick box */}
              <div className="h-box h-box-width">
                <Popbox
                  popheading="Course Fail Rate"
                  bg="bgcl-orange"
                  orangebg="view-all-performers-orange-bg"
                  hover_orange="orange-h"
                  action={hitme4}
                  trigger={hme}
                  trigger2={hme2}
                  per={ppppperfor}
                  viewteam={expview5}
                  grow={charter4}
                />
              </div>
              {/**Calling onclick box ends*/}
              <Card
                click={click5}
                closer={closer5}
                boxx={openbox4}
                icon={true}
                para="Percentage of courses failed against courses attempted."
                heading="Course Fail Rate"
                upsymbol1="-"
                updigit1="3"
                updigit2=".43"
                upsymbol2="%"
                midvalue1="1"
                midvalue2=".57"
                midsymbol="%"
                lowetexr="Company Fail vs Others"
                lowerimg="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/arrow_down.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
