// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(100, 100, 255, 0.7);
  position: absolute;
  left: ${(props) => String(props.coords.x + "px")};
  top: ${(props) => String(props.coords.y + "px")};
  transform: translate(-50%, -50%);
  border: 2px dotted rgba(50, 50, 255, 0.7);

  @media (max-width: 600px) {
    height: 25px;
    width: 25px;
    border: 1px dotted rgba(50, 50, 255, 0.7);
  }
`;

function TargetBox({ location, containerRef }) {
  const [coords, setCoords] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    const update = () => {
      const x =
        location.relativeX * containerRef.current.offsetWidth +
        containerRef.current.offsetLeft;
      const y =
        location.relativeY * containerRef.current.offsetHeight +
        containerRef.current.offsetTop;
      setCoords({
        x,
        y,
      });
    };
    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [location, containerRef]);

  return <Container coords={coords} />;
}

export default TargetBox;
