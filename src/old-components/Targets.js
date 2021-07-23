// Libaries
import React from "react";
import styled from "styled-components";

// Components
import FindTarget from "./FindTarget";

const Container = styled.div`
  display: flex;
  overflow: scroll;
`;

function Targets({ targets }) {
  return (
    <Container>
      {targets &&
        targets.map((target) => {
          return <FindTarget target={target} key={target.title} />;
        })}
    </Container>
  );
}

export default Targets;
