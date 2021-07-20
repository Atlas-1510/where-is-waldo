// Libraries
import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  max-height: 10rem;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: ${(props) => String(props.location.x + 30 + "px")};
  top: ${(props) => String(props.location.y + "px")};
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

const TargetBoxContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(100, 100, 255, 0.7);
  position: fixed;
  left: ${(props) => String(props.location.x + "px")};
  top: ${(props) => String(props.location.y + "px")};
  transform: translate(-50%, -50%);
  border: 2px dotted rgba(50, 50, 255, 0.7);
`;

function Menu({ location, targets }) {
  return (
    <>
      <TargetBoxContainer location={location} />
      <MenuContainer location={location}>
        <UL>
          {targets.map((target) => (
            <MenuOption key={target.title}>{target.emoji}</MenuOption>
          ))}
        </UL>
      </MenuContainer>
    </>
  );
}

export default Menu;
