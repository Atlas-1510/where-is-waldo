// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: scroll;
`;

const Img = styled.img`
  min-width: 100%;
  max-width: 1000px;
`;

function Image({ image }) {
  return (
    <Container>
      <Img src={image} alt="Characters hidden amid lots of detail" />
    </Container>
  );
}

export default Image;
