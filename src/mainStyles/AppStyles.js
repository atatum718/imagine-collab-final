import React from "react";
import styled, { css } from "styled-components";
import "./appstyles.css";
import { Link } from "react-router-dom";
import { FaHome, FaArrowRight } from "react-icons/fa";
const Button = styled.button`
 background: #FAD200;
 border-radius: 30px;
 border: 2px solid #F3F812;
 color: black;
 margin: 0 1em;
 padding: 0.25em 1em;
 width: 20%;
 height: 6%;
 ${(props) =>
  props.primary &&
  css`
   background: white;
  `}
`;
const Container = styled.div`
 text-align: center;
`;
function NavButton(props) {
 return (
  <Button>
   <i className="add-button" className={"fas" + props.iconClass}></i>
   {props.title}
  </Button>
 );
}
export function TopPageDecoration(props) {
 return (
  <div className="parent">
   <div className="header-nav">{/* <img src={logo} alt=“Logo" /> */}</div>
  </div>
 );
}
export function BottomPageDecoration(props) {
 return (
  <div className="parent-links">
   {
    <Link className="links-1" to="./preview">
     <FaHome size="50px" />
     <FaArrowRight size="50px" />
    </Link>
   }
  </div>
 );
}
