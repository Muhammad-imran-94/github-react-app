/* eslint-disable no-useless-concat */
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./pbox.css";

const Popbox = (props) => {
  return (
    <>
      <div className={"box-click " + " " + props.bg}>
        <div className="box-content h-box-db">
          <div className="row pad-head just-btw">
            <div className="dis-f">
              <h6>{props.popheading}</h6>
            </div>
            <div>
              <i className="fa fa-times " onClick={props.action}></i>
            </div>
          </div>
          <div className="row pad-sub-row just-btw" onClick={props.trigger}>
            <p className="first-p pd-l-2">Period Begins</p>
            <p className="last-p">10.15.17</p>
          </div>
          <div className="row-content">
            <div className="inner-row">
              <Calendar className="clndr-style" />
            </div>
          </div>
          <div className="row pad-sub-row just-btw" onClick={props.trigger2}>
            <p className="first-p pd-l-2">Period Ends</p>
            <p className="last-p">10.15.17</p>
          </div>
          <div className="row-content">
            <div className="inner-row">
              <Calendar className="clndr-style" />
            </div>
          </div>
        </div>
        <div className="row pad-lower-row top-perfor" onClick={props.per}>
          <p className="pd-l-2 cu-point">Top Performers</p>
        </div>
        <div className="performers d-no">
          {/**one name */}
          <div
            className={
              "performers-content performers-pad-y" +
              " " +
              props.hover_pink +
              " " +
              props.hover_green +
              " " +
              props.hover_purple +
              " " +
              props.hover_blue +
              " " +
              props.hover_orange
            }
          >
            <div className="img-avat">
              <img src="profile.png" alt="mising" />
            </div>
            <div className="avat-text">
              <p>Ryan Grubb</p>
            </div>
          </div>
          {/**one name ends*/}
          {/**one name */}
          <div
            className={
              "performers-content performers-pad-y" +
              " " +
              props.pinkbg +
              " " +
              props.purplebg +
              " " +
              props.bluebg +
              " " +
              props.orangebg +
              " " +
              props.hover_pink +
              " " +
              props.hover_green +
              " " +
              props.hover_purple +
              " " +
              props.hover_blue +
              " " +
              props.hover_orange
            }
          >
            <div className="img-avat ">
              <img src="profile.png" alt="mising" />
            </div>
            <div className="avat-text">
              <p>Andrew laPine</p>
            </div>
          </div>
          {/**one name ends*/}
          {/**one name*/}
          <div
            className={
              "performers-content performers-pad-y" +
              " " +
              props.hover_pink +
              " " +
              props.hover_green +
              " " +
              props.hover_purple +
              " " +
              props.hover_blue +
              " " +
              props.hover_orange
            }
          >
            <div className="img-avat">
              <img src="profile.png" alt="mising" />
            </div>
            <div className="avat-text">
              <p>Patrick Eberhard</p>
            </div>
          </div>
          <div className="h-performers d-no">
            {/**one name ends*/}
            {/**one name */}
            <div
              className={
                "performers-content performers-pad-y" +
                " " +
                props.linebg +
                " " +
                props.pinkbg +
                " " +
                props.purplebg +
                " " +
                props.bluebg +
                " " +
                props.orangebg +
                " " +
                props.hover_pink +
                " " +
                props.hover_green +
                " " +
                props.hover_purple +
                " " +
                props.hover_blue +
                " " +
                props.hover_orange
              }
            >
              <div className="img-avat">
                <img src="profile.png" alt="mising" />
              </div>
              <div className="avat-text">
                <p>Steven Lee Jr</p>
              </div>
            </div>
            {/**one name ends */}
            {/**one name */}
            <div
              className={
                "performers-content performers-pad-y" +
                " " +
                props.hover_pink +
                " " +
                props.hover_green +
                " " +
                props.hover_purple +
                " " +
                props.hover_blue +
                " " +
                props.hover_orange
              }
            >
              <div className="img-avat">
                <img src="profile.png" alt="mising" />
              </div>
              <div className="avat-text">
                <p>Sadin Hill</p>
              </div>
            </div>
            {/**one name ends */}
            {/**one name */}
            <div
              className={
                "performers-content performers-pad-y" +
                " " +
                props.linebg +
                " " +
                props.pinkbg +
                " " +
                props.purplebg +
                " " +
                props.bluebg +
                " " +
                props.orangebg +
                " " +
                props.hover_pink +
                " " +
                props.hover_green +
                " " +
                props.hover_purple +
                " " +
                props.hover_blue +
                " " +
                props.hover_orange
              }
            >
              <div className="img-avat">
                <img src="profile.png" alt="mising" />
              </div>
              <div className="avat-text">
                <p>Christopher Heffron</p>
              </div>
            </div>
            {/**one name ends */}
            {/**one name */}
            <div
              className={
                "performers-content performers-pad-y" +
                " " +
                props.hover_pink +
                " " +
                props.hover_green +
                " " +
                props.hover_purple +
                " " +
                props.hover_blue +
                " " +
                props.hover_orange
              }
            >
              <div className="img-avat">
                <img src="profile.png" alt="mising" />
              </div>
              <div className="avat-text">
                <p>Mark Trent</p>
              </div>
            </div>
            {/**one name ends */}
            {/**one name */}
            <div
              className={
                "performers-content performers-pad-y" +
                " " +
                props.linebg +
                " " +
                props.pinkbg +
                " " +
                props.purplebg +
                " " +
                props.bluebg +
                " " +
                props.orangebg +
                " " +
                props.hover_pink +
                " " +
                props.hover_green +
                " " +
                props.hover_purple +
                " " +
                props.hover_blue +
                " " +
                props.hover_orange
              }
            >
              <div className="img-avat">
                <img src="profile.png" alt="mising" />
              </div>
              <div className="avat-text">
                <p>Mark English</p>
              </div>
            </div>
            {/**one name ends */}
            {/**one name */}
            <div
              className={
                "performers-content performers-pad-y" +
                " " +
                props.hover_pink +
                " " +
                props.hover_green +
                " " +
                props.hover_purple +
                " " +
                props.hover_blue +
                " " +
                props.hover_orange
              }
            >
              <div className="img-avat">
                <img src="profile.png" alt="mising" />
              </div>
              <div className="avat-text">
                <p>Trevor Trahan</p>
              </div>
            </div>
            {/**one name ends */}
            {/**one name */}
            <div
              className={
                "performers-content performers-pad-y" +
                " " +
                props.linebg +
                " " +
                props.pinkbg +
                " " +
                props.purplebg +
                " " +
                props.bluebg +
                " " +
                props.orangebg +
                " " +
                props.hover_pink +
                " " +
                props.hover_green +
                " " +
                props.hover_purple +
                " " +
                props.hover_blue +
                " " +
                props.hover_orange
              }
            >
              <div className="img-avat">
                <img src="profile.png" alt="mising" />
              </div>
              <div className="avat-text">
                <p>Alberto Marquez Villegas</p>
              </div>
            </div>
            {/**one name ends */}
          </div>
          <div
            className={
              "performers-content performers-pad-y cu-point" +
              " " +
              props.linebg +
              " " +
              props.pinkbg +
              " " +
              props.purplebg +
              " " +
              props.bluebg +
              " " +
              props.hover_pink +
              " " +
              props.hover_green +
              " " +
              props.hover_purple +
              " " +
              props.hover_blue +
              " " +
              props.hover_orange
            }
            onClick={props.viewteam}
          >
            <div className="img-avat">
              <img src="download.png" alt="mising" className="last-img-op" />
            </div>
            <div className="avat-text">
              <p>View All Top Performers</p>
            </div>
          </div>
        </div>
        <div className="row pad-last-2 chart-exp" onClick={props.grow}>
          <p className="pd-l-2">Chart View</p>
        </div>
        <div className={"chart-box d-no" + " " + props.bg}>
          <div className="img-div">
            <div className="chart-text">
              <p>10.15.17</p>
              <p>10.15.18</p>
            </div>
          </div>
        </div>
        <div className="row pad-last-2 custom-view">
          <p className="pd-l-2">Customize My Views</p>
        </div>
      </div>
    </>
  );
};

export default Popbox;
