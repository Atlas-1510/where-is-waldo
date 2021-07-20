// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-height: 10rem;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: ${(props) => String(props.menu.x + "px")};
  top: ${(props) => String(props.menu.y + "px")};
`;

const UL = styled.ul`
  padding: 0;
  margin: 0;
`;

const MenuOption = styled.li`
  font-size: 2rem;
  list-style-type: none;
  padding: 0.5rem;
`;

function Menu({ menu, targets }) {
  return (
    <Container menu={menu}>
      <UL>
        {targets.map((target) => (
          <MenuOption key={target.title}>{target.emoji}</MenuOption>
        ))}
      </UL>
    </Container>
  );
}

export default Menu;
