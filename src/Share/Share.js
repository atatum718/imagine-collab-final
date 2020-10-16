import React, { Component } from "react";
import "./share-screen.css";
import { FontAwesomeIcon } from "@fortawesome/reat-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const arrow = <FontAwesomeIcon icon={faAngleRight} size="1x" color="#0ECAF5" />;

function Share() {
  return (
    <div className="container">
      <div className="box">
        <ul className="ul-list">
          <li>
            <img src="./src/Share/img/facebook.png" alt="facebook" />
          </li>
          <li>
            <p className="arrow">{arrow} </p>
          </li>
        </ul>
      </div>
      <div className="box">
        <ul className="ul-list">
          <li>
            <img src="./src/Share/img/twitter.png" alt="twitter" />
          </li>
          <li>
            <p className="arrow">{arrow} </p>
          </li>
        </ul>
      </div>

      <div className="box">
        <ul className="ul-list">
          <li>
            <img src="./src/Share/img/intsa.png" alt="intsagram" />
          </li>
          <li>
            <p className="arrow">{arrow} </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Share;
