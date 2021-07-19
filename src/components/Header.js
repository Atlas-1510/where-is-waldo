// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.header`
  height: 5rem;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
`;

function Header(props) {
  return <Container>{props.children}</Container>;
}

export default Header;
