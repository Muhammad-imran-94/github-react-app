import React from "react";
import List from "./footNav";
import "./foot.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="Footer-container">
          <div className="col-left">
            {/** Calling List */}
            <List
              li1="Account"
              li2="Change permissions"
              li3="Get transcipts"
              li4="Billing Information"
              li5="More Insight"
            />
            {/** Calling List ends */}
            {/**====================== */}
            {/** Calling List */}
            <List
              li1="Learning"
              li2="Dashboard home"
              li3="Course dashboard"
              li4="Certification dashboard"
              li5="More dashboard"
            />
            {/** Calling List ends */}
            {/**====================== */}
            {/** Calling List */}
            <List
              li1="Support"
              li2="Customer support"
              li3="FAQs / resources"
              li4="Live Support chat"
              li5="Email SCTE"
            />
            {/** Calling List ends */}
            {/**====================== */}
            {/** Calling List */}
            <List
              li1="Quicklinks"
              li2="Corporate dashboard"
              li3="Personal dashboard"
              li4="Chapter dashboard"
              li5="SCTE website"
            />
            {/** Calling List ends */}
            {/**====================== */}
          </div>
          <div className="col-ri">
            <ul>
              <li>
                <a href="icon">
                  <i className="fab fa-facebook-f "></i>
                </a>
              </li>
              <li>
                <a href="icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="icon">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="icon">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="icon">
                  <i className="fab fa-facebook-f "></i>
                </a>
              </li>
              <li>
                <a href="icon">
                  <i className="fab fa-apple"></i>
                </a>
              </li>
              <li>
                <a href="icon">
                  <i className="fa fa-play" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer upper text section end */}
        {/**=============================== */}
        {/* Footer lowe text section */}
        <div className="foot-lower">
          <div className="lower-left">
            <ul>
              <li>140 philips Road,Exton PA 19341</li>
              <li>Toll-free: 800.542.5040</li>
              <li>Phone: 610.363.6888</li>
              <li>Fax: 610.8847237</li>
            </ul>
          </div>
          <div className="lower-right">
            <div className="image">
              <img
                src="http://scte-dashboard.s3-website-us-west-2.amazonaws.com/asset/text.png"
                alt="missing"
                style={{ width: "140px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
