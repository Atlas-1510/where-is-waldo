// Libraries
import React, { useState, useRef } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Target from "../components/Target";
import TargetBox from "../components/TargetBox";
import Menu from "../components/Menu";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f1faee;
  min-height: 100%;
`;

const StyledHeader = styled(Header)`
  flex-direction: row;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const TargetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  margin-right: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  flex-grow: 1;
`;

const Image = styled.img`
  width: 100%;
`;

function Game({ location }) {
  const [menu, setMenu] = useState({
    open: false,
    relativeX: null,
    relativeY: null,
  });
  const [targetBox, setTargetBox] = useState({
    open: false,
    relativeX: null,
    relativeY: null,
  });
  const level = location.state.level;
  const imageRef = useRef();
  const handleClick = (e) => {
    if (!menu.open) {
      const imageTopLeftX = imageRef.current.offsetLeft;
      const imageTopLeftY = imageRef.current.offsetTop;

      const imageWidth = imageRef.current.offsetWidth;
      const imageHeight = imageRef.current.offsetHeight;

      const clickLocationX = e.pageX;
      const clickLocationY = e.pageY;

      const clickOffsetFromCornerX = clickLocationX - imageTopLeftX;
      const clickOffsetFromCornerY = clickLocationY - imageTopLeftY;

      const relativeX = clickOffsetFromCornerX / imageWidth;
      const relativeY = clickOffsetFromCornerY / imageHeight;

      setTargetBox({
        open: true,
        relativeX,
        relativeY,
      });
      // TODO: Offset menu, adjust for page width so not offscreen
      setMenu({
        open: true,
        relativeX,
        relativeY,
      });
    } else if (menu.open) {
      setTargetBox({
        open: false,
        relativeX: null,
        relativeY: null,
      });
      setMenu({
        open: false,
        relativeX: null,
        relativeY: null,
      });
    }
  };
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <TargetsContainer>
          {level.targets &&
            level.targets.map((target) => {
              return <Target target={target} key={target.name} />;
            })}
        </TargetsContainer>
      </StyledHeader>
      <ImageContainer>
        {targetBox.open && (
          <TargetBox location={targetBox} containerRef={imageRef} />
        )}
        {menu.open && (
          <Menu
            targets={level.targets}
            location={menu}
            containerRef={imageRef}
          />
        )}
        <Image ref={imageRef} src={level.image} onClick={handleClick} />
      </ImageContainer>
      <Footer />
    </Container>
  );
}

export default Game;
