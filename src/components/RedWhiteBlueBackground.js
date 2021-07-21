// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  position: absolute;
  width: 100%;
  height: 200%;
`;

const Colour = styled.div`
  background-color: ${(props) => props.color};
  height: 100%;
  box-shadow: -20px -10px 20px rgba(0, 0, 0, 0.3);
  transform: rotate(${(props) => props.rotation});
`;

function RedWhiteBlueBackground() {
  return (
    <Container>
      <Colour color={"#a73946"} rotation={"45deg"} />
      <Colour color={"#d5858f"} rotation={"-45deg"} />
      <Colour color={"#a8dadc"} rotation={"45deg"} />
      <Colour color={"#1d3557"} rotation={"-45deg"} />
      <Colour color={"#5B2028"} rotation={"45deg"} />
      <Colour color={"#457b9d"} rotation={"-45deg"} />
    </Container>
  );
}

export default RedWhiteBlueBackground;
