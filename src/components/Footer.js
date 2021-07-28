// Libraries
import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/core";

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Footer() {
  return (
    <Container>
      <StyledLink
        to={{ pathname: "https://github.com/Atlas-1510/where-is-waldo" }}
        target="_blank"
      >
        <IconContext.Provider value={{ color: "#d4a373", size: "3rem" }}>
          <SiGithub />
        </IconContext.Provider>
      </StyledLink>
    </Container>
  );
}

export default Footer;
