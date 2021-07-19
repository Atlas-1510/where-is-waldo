// Libraries
import React from "react";
import styled from "styled-components";

// Components
import Targets from "./Targets";
import Timer from "./Timer";

const Container = styled.header`
  height: 5rem;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;

function Header({ targets }) {
  return (
    <Container>
      <Targets targets={targets} />
      <Timer />
    </Container>
  );
}

export default Header;
