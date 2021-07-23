// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  margin: 1rem;
`;

function Button({ title, onClick, type }) {
  return (
    <Container onClick={onClick} type={type}>
      {title}
    </Container>
  );
}

export default Button;
