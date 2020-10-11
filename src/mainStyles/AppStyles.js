import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: #fad200;
  border-radius: 30px;
  border: 2px solid #f3f812;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css` background: linear-gradient(#f3f812, #fad200)
color:black;
`}
`;

const Container = styled.div`
  text-align: center;
`;

function NavButton(props) {
  return (
    <Button>
      <i class={"fas " + props.iconClass}></i>
      {props.title}
    </Button>
  );
}
export function TopPageDecoration(props) {
  return (
    <Container>
      <NavButton iconClass="fa-plus" title="begin" />
    </Container>
  );
}

export function BottomPageDecoration(props) {
  return <p>style this part for the bottom!!</p>;
}
