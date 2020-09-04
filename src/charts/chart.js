import React from "react";
import Dots from "../tool/toolTip";
import "./chartstyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "zingchart/es6";
import ZingChart from "zingchart-react";
// Modules must be imported EXPLICITLY when using es6 version
import "zingchart-react/dist/modules/zingchart-depth.min.js";

const toggle0 = () => {
  var w = document.getElementsByClassName("pop-box")[0];
  w.classList.add("d-f");
};

const close0 = () => {
  var g = document.getElementsByClassName("pop-box")[0];
  g.classList.add("d-none");
};

export default () => {
  var myConfig1 = {
    type: "ring",
    backgroundPosition: "center",
    backgroundColor: "transparent",
    title: {},
    subtitle: {},
    height: "50%",
    width: "100%",
    plot: {
      animation: {
        delay: 1,
        effect: "ANIMATION_EXPAND_VERTICAL",
        method: "ANIMATION_LINEAR",
        speed: "ANIMATION_SLOW",
      },
      "value-box": {
        text: "%pie-total-value",
        placement: "center",
        "font-color": "white",
        "font-size": 35,
        "font-family": "Georgia",
        "font-weight": "normal",
        rules: [
          {
            rule: "%p != 0",
            visible: false,
          },
        ],
      },
      tooltip: {
        text: "%t: %v (%npv%)",
        "font-color": "black",
        "font-family": "Georgia",
        "text-alpha": 1,
        "background-color": "white",
        alpha: 0.7,
        "border-width": 1,
        "border-color": "#cccccc",
        "line-style": "dotted",
        "border-radius": "10px",
        padding: "10%",
        placement: "node:center",
      },
      slice: "50%",
      "border-width": 0,
    },
    plotarea: {
      "margin-top": "12%",
    },
    series: [
      {
        values: [234],
        "background-color": "#cc0000",
        text: "Alpha",
      },
      {
        values: [121],
        "background-color": "#ff3300",
        text: "Beta",
      },
      {
        values: [77],
        "background-color": "#ff6600",
        text: "Gamma",
      },
      {
        values: [65],
        "background-color": "#ff9933",
        text: "Delta",
      },
      {
        values: [59],
        "background-color": "#ffcc00",
        text: "Epsilon",
      },
      {
        values: [35],
        "background-color": "#ace600",
        text: "Zeta",
      },
      {
        values: [34],
        "background-color": "#88cc00",
        text: "Eta",
      },
      {
        values: [31],
        "background-color": "#339933",
        text: "Theta",
      },
      {
        values: [16],
        "background-color": "#66ccff",
        text: "Iota",
      },
      {
        values: [14],
        "background-color": "#3399ff",
        text: "Kappa",
      },
      {
        values: [13],
        "background-color": "#0066ff",
        text: "Lambda",
      },
      {
        values: [12],
        "background-color": "#3333cc",
        text: "Mu",
      },
      {
        values: [11],
        "background-color": "#6600ff",
        text: "Nu",
      },
      {
        values: [10],
        "background-color": "#9933ff",
        text: "Xi",
      },
      {
        values: [9],
        "background-color": "#9999ff",
        text: "Omicron",
      },
    ],
  };
  var myConfig2 = {
    type: "pie",
    title: {},
    "scale-r": {
      "ref-angle": 270, //relative to starting 90 degree position
    },
    backgroundPosition: "center",
    backgroundColor: "transparent",
    height: "50%",
    width: "100%",
    plot: {
      "value-box": {
        visible: false,
      },
      animation: {
        delay: 1,
        effect: "ANIMATION_EXPAND_VERTICAL",
        method: "ANIMATION_LINEAR",
        speed: "ANIMATION_SLOW",
      },
    },

    series: [
      {
        values: [59],
      },
      {
        values: [55],
      },
      {
        values: [30],
      },
      {
        values: [28],
      },
      {
        values: [15],
      },
    ],
  };

  var myConfig3 = {
    type: "ring",
    backgroundPosition: "center",
    backgroundColor: "transparent",
    title: {},

    height: "50%",
    width: "100%",
    plot: {
      "value-box": {
        "font-size": 10,
        "font-weight": "normal",
      },
      animation: {
        delay: 1.5,
        effect: "ANIMATION_EXPAND_VERTICAL",
        method: "ANIMATION_LINEAR",
        speed: "ANIMATION_SLOW",
      },
    },
    series: [
      {
        values: [59],
      },
      {
        values: [55],
      },
      {
        values: [30],
      },
      {
        values: [28],
      },
      {
        values: [15],
      },
    ],
  };
  var myConfig5 = {
    type: "line",
    "scale-y": {
      visible: false,
    },
    "scale-x": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    height: "50%",
    width: "100%",
    backgroundPosition: "center",
    backgroundColor: "transparent",
    plot: {
      aspect: "segmented",
      animation: {
        delay: 1,
        effect: 5,
        sequence: 2,
        speed: 1,
      },
    },
    series: [
      {
        values: [
          [0, 0],
          [1, 5],
          [2, 4],
          [3, 2],
          [4, 4],
          [5, 8],
        ],
      },
    ],
  };

  AOS.init({ duration: 1000 });
  return (
    <>
      <div className="chart-container">
        <div className="display-flex">
          {/* charts left side Start */}
          <div className="col-4">
            <div className=" pad-y pad-left">
              {/*Calling Toggles */}
              <Dots
                open={toggle0}
                close={close0}
                p="The number of individuals utilizing the metrics (except membership) being measured on the metrics items below."
              />
              {/*Calling Toggles ends*/}
              <h3>Utilization</h3>
            </div>
            <div className="display-flex pad-chart" data-aos="fade-right">
              <div className="col-5">
                <div className="chart-style">
                  <ZingChart data={myConfig1} />
                </div>
                <div className="chart-style">
                  <ZingChart data={myConfig2} />
                </div>
              </div>
              <div className="col-5">
                <div className="chart-style">
                  <ZingChart data={myConfig3} />
                </div>
                <div className="chart-style">
                  <ZingChart data={myConfig1} />
                </div>
              </div>
            </div>
          </div>
          {/* charts left side end */}

          {/* charts right side start */}
          <div className="col-6">
            <div className="display-flex flex-col pad-right">
              {/* charts right toggler and heading Start */}
              <div className="display-flex pad-y just-end">
                {/*Calling Toggles */}
                <Dots />
                {/*Calling Toggles ends */}
              </div>
              <h3 className="display-flex just-end">
                Professional Development Index
              </h3>
              <div className="display-flex just-end ">
                <div className="display-flex space-between box-width">
                  <div className="clor-blue">
                    <p>Average</p>
                  </div>
                  <div className="clor-yellow">
                    <p>Your Company 2018</p>
                  </div>
                  <div className="clor-db">
                    <p>Your Company 2017</p>
                  </div>
                </div>
              </div>
            </div>
            {/* charts right toggler and heading end*/}

            {/* Line Chart section */}
            <div className="linechart-container" data-aos="fade-left">
              <ZingChart data={myConfig5} />
            </div>
            <div className="lower-heading">
              <h1>Company Competencies</h1>
            </div>
            {/* Line Chart section end */}
          </div>
          {/* charts right side end */}
        </div>
      </div>
    </>
  );
};
