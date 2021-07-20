// Libraries
import React, { useState } from "react";
import styled from "styled-components";

// Components
import Menu from "./Menu";

const Container = styled.div`
  overflow: scroll;
`;

const Img = styled.img`
  min-width: 100%;
  max-width: 1000px;
`;

function Image({ image, targets }) {
  const [menu, setMenu] = useState({
    open: false,
    x: null,
    y: null,
  });

  const handleClick = (e) => {
    if (!menu.open) {
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
      {menu.open && <Menu menu={menu} targets={targets} />}
      <Img src={image} alt="Characters hidden amid lots of detail" />
    </Container>
  );
}

export default Image;
