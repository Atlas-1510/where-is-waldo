// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  margin: 1rem;
`;

function Button({ title }) {
  return <Container>{title}</Container>;
}

export default Button;
