// Libraries
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Target from "../components/Target";
import TargetBox from "../components/TargetBox";
import Menu from "../components/Menu";
import VictoryModal from "../components/VictoryModal";
import Timer from "../components/Timer";

// Hooks
import useStartTimer from "../hooks/useStartTimer";

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
  const [targets, setTargets] = useState(location.state.level.targets);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    if (targets.every((target) => target.found)) {
      setVictory(true);
    }
  }, [targets]);

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

      console.log(`relativeX: ${relativeX}`);
      console.log(`relativeY: ${relativeY}`);

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
  const timerID = useStartTimer(location);
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <TargetsContainer>
          {targets &&
            targets.map((target) => {
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
            targets={targets}
            setTargets={setTargets}
            location={menu}
            containerRef={imageRef}
            setTargetBox={setTargetBox}
            setMenu={setMenu}
            targetBox={targetBox}
          />
        )}
        {targets.map((target) =>
          target.found ? (
            <TargetBox location={target} containerRef={imageRef} />
          ) : (
            <></>
          )
        )}
        <Image ref={imageRef} src={level.image} onClick={handleClick} />
      </ImageContainer>
      {timerID && <Timer timerID={timerID} victory={victory} />}
      {victory && <VictoryModal timerID={timerID} />}
      <Footer />
    </Container>
  );
}

export default Game;
