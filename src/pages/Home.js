// Libraries
import React from "react";
import styled from "styled-components";

// Components
import Logo from "../components/Logo";

const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header``;

function Home() {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
    </Container>
  );
}

export default Home;
