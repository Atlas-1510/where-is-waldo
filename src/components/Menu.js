// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Target from "./Target";

const Container = styled.div`
  position: absolute;
  left: ${(props) => String(props.coords.x + "px")};
  top: ${(props) => String(props.coords.y + "px")};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 5;
`;

const UL = styled.ul`
  padding: 0;
  margin: 0;
`;

function Menu({
  targets,
  setTargets,
  location,
  containerRef,
  setTargetBox,
  setMenu,
}) {
  const [coords, setCoords] = useState({
    x: null,
    y: null,
  });

  const handleClick = (menuChoice) => {
    console.log(menuChoice);
    if (
      Math.abs(location.relativeX - menuChoice.relativeX) < 0.05 &&
      Math.abs(location.relativeY - menuChoice.relativeY) < 0.05
    ) {
      console.log(`You found ${menuChoice.name}!`);
      const newTargets = targets.map((target) =>
        target.name === menuChoice.name ? { ...target, found: true } : target
      );
      setTargets(newTargets);
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

  useEffect(() => {
    const update = () => {
      let x =
        location.relativeX * containerRef.current.offsetWidth +
        containerRef.current.offsetLeft;
      let y =
        location.relativeY * containerRef.current.offsetHeight +
        containerRef.current.offsetTop;

      const imageX80Line =
        containerRef.current.offsetLeft +
        containerRef.current.offsetWidth * 0.8;

      if (x < imageX80Line) {
        x = x + containerRef.current.offsetWidth * 0.03;
      } else {
        x = x - containerRef.current.offsetWidth * 0.08;
      }

      const imageY80Line =
        containerRef.current.offsetTop +
        containerRef.current.offsetHeight * 0.8;

      if (y < imageY80Line) {
        y = y + containerRef.current.offsetHeight * 0.03;
      } else {
        y = y - containerRef.current.offsetHeight * 0.3;
      }
      setCoords({
        x,
        y,
      });
    };
    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [location, containerRef]);

  return (
    <Container coords={coords}>
      <UL>
        {targets.map((target) => (
          <Target
            key={target.name}
            target={target}
            onClick={() => handleClick(target)}
          />
        ))}
      </UL>
    </Container>
  );
}

export default Menu;
