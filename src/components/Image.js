// Libraries
import React, { useState } from "react";
import styled from "styled-components";

// Components
import Menu from "./Menu";

// Firestore
import useStorage from "../hooks/useStorage.js";
import TargetBoxContainer from "./TargetBoxContainer";

const Container = styled.div``;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

function Image({ imageURL, targets, setTargets }) {
  const downloadURL = useStorage(imageURL);
  const [menu, setMenu] = useState({
    open: false,
    x: null,
    y: null,
  });

  const handleClick = (e) => {
    if (!menu.open) {
      console.log(`x: ${e.pageX}`);
      console.log(`y: ${e.pageY}`);
      setMenu({
        open: true,
        x: e.pageX,
        y: e.pageY,
      });
    } else if (menu.open) {
      setMenu({ open: false, x: null, y: null });
    }
  };

  return (
    <Container onClick={handleClick}>
      {menu.open && (
        <Menu location={menu} targets={targets} setTargets={setTargets} />
      )}
      <Img src={downloadURL} alt="Characters hidden amid lots of detail" />
      {targets.map(
        (target) =>
          target.found && (
            <TargetBoxContainer key={target.title} location={target} />
          )
      )}
    </Container>
  );
}

export default Image;
