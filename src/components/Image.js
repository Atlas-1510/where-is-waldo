// Libraries
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: scroll;
`;

const Img = styled.img`
  min-width: 100%;
  max-width: 1000px;
`;

const Menu = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: ${(props) => String(props.menu.x + "px")};
  top: ${(props) => String(props.menu.y + "px")};
`;

function Image({ image }) {
  const [menu, setMenu] = useState({
    open: false,
    x: null,
    y: null,
  });

  const handleClick = (e) => {
    if (!menu.open) {
      console.log(`X: ${e.pageX}`);
      console.log(`Y: ${e.pageY}`);
      setMenu({
        open: true,
        x: e.pageX,
        y: e.pageY,
      });
    } else if (menu.open) {
      console.log("closing menu");
      setMenu({ open: false, x: null, y: null });
    }
  };

  return (
    <Container onClick={handleClick}>
      {menu.open && <Menu menu={menu} />}
      <Img src={image} alt="Characters hidden amid lots of detail" />
    </Container>
  );
}

export default Image;
