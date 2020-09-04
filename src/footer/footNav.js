import React from "react";
import "./footnav.css";

const List = (props) => {
  return (
    <>
      <div className="sub-col">
        <ul>
          <li>
            <a href="link">{props.li1}</a>
          </li>
          <li>
            <a href="link">{props.li2}</a>
          </li>
          <li>
            <a href="link">{props.li3}</a>
          </li>
          <li>
            <a href="link">{props.li4}</a>
          </li>
          <li>
            <a href="link">{props.li5}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default List;
