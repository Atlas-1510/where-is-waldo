// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  background-color: pink;
  border-radius: 25px;
`;

function InfoBox(props) {
  return <Container>{props.children}</Container>;
}

export default InfoBox;
