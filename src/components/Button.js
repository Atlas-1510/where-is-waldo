// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  margin: 1rem;
`;

function Button({ title, onClick }) {
  return <Container onClick={onClick}>{title}</Container>;
}

export default Button;
