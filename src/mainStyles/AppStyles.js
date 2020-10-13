import React from "react";
import styled, { css } from "styled-components";
import './appstyles.css'
import { Route, Switch, Link } from "react-router-dom";



const Button = styled.button`
  background: #fad200;
  border-radius: 30px;
  border: 2px solid #f3f812;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 20%;
  height: 6%;

  ${(props) =>
    props.primary &&
    css` background: white;
`}
`;

const Container = styled.div`
  text-align: center;
`;

function NavButton(props) {
  return (
    <Button>
      <i className="add-button" class={"fas " + props.iconClass}></i>
      {props.title}
    </Button>
  );
}



export function TopPageDecoration(props) {
  return (
  <div className="parent">
  <div className="header-nav"></div>

  </div>


  );
}


export function BottomPageDecoration(props) {
  return(
    <div className="parent-links">  
      <Link className="links" to="/"><img class="icons" src="https://files.slack.com/files-pri/TCNHBFEG3-F01BYJ0QHD5/group_1.png" alt="community"></img></Link>
      <Link className="links" to="/preview"><img class="icons" src="https://files.slack.com/files-pri/TCNHBFEG3-F01CDGG40TV/group_2.png"></img> </Link>
      <Link className="links" id="community" to="/filter"><img class="icons" src="https://files.slack.com/files-pri/TCNHBFEG3-F01BYJ0PQK1/frame_1.png"></img></Link> 
    </div>
  )
}





