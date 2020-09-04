import React, { useEffect } from "react";
import Nav from "./navigation/navHeader";
import Charts from "./charts/chart";
import Addmore from "./aftercharts/afterCharts";
import Insight from "./insight/inSight";
import Footer from "./footer/footer";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });
  const onScroll = () => {
    if (document.documentElement.scrollTop > 0) {
      document
        .getElementsByClassName("arrow-upper")[0]
        .classList.add("arrow-bg-change");
    } else {
      document
        .getElementsByClassName("arrow-upper")[0]
        .classList.remove("arrow-bg-change");
    }
    if (document.documentElement.scrollTop > 2047) {
      document
        .getElementsByClassName("arrow-downer")[0]
        .classList.add("arrow-def-color");
    } else {
      document
        .getElementsByClassName("arrow-downer")[0]
        .classList.remove("arrow-def-color");
    }
  };

  const clscroll = () => {
    var d = document.documentElement.scrollTop;
    window.scrollTo(0, d + 350);
  };
  const clscrollup = () => {
    var d = document.documentElement.scrollTop;
    window.scrollTo(0, d - 300);
  };
  return (
    <>
      <div className="App">
        <div className="scroller">
          <div className="arrow-upper" onClick={clscrollup}>
            <i className="fa fa-caret-up"></i>
          </div>
          <div className="arrow-downer" onClick={clscroll}>
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
        <div className="main-container">
          <Nav />
          <Charts />
          <Addmore />
          <Insight />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
