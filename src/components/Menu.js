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
`;

const UL = styled.ul`
  padding: 0;
  margin: 0;
`;

function Menu({ targets, location, containerRef }) {
  const [coords, setCoords] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const update = () => {
      let x =
        location.relativeX * containerRef.current.offsetWidth +
        containerRef.current.offsetLeft;
      const y =
        location.relativeY * containerRef.current.offsetHeight +
        containerRef.current.offsetTop;

      const image80Line =
        containerRef.current.offsetLeft +
        containerRef.current.offsetWidth * 0.8;

      if (x < image80Line) {
        x = x + containerRef.current.offsetWidth * 0.03;
      } else {
        x = x - containerRef.current.offsetWidth * 0.08;
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
          <Target key={target.name} target={target} />
        ))}
      </UL>
    </Container>
  );
}

export default Menu;
