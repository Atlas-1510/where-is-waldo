// Libraries
import React from "react";
import styled from "styled-components";

// Components
import TargetBoxContainer from "./TargetBoxContainer";

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

// const TargetBoxContainer = styled.div`
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   background-color: rgba(100, 100, 255, 0.7);
//   position: fixed;
//   left: ${(props) => String(props.location.x + "px")};
//   top: ${(props) => String(props.location.y + "px")};
//   transform: translate(-50%, -50%);
//   border: 2px dotted rgba(50, 50, 255, 0.7);
// `;

function Menu({ location, targets, setTargets }) {
  const handleClick = (menuChoice) => {
    if (
      Math.abs(location.x - menuChoice.x) < 30 &&
      Math.abs(location.y - menuChoice.y) < 30
    ) {
      console.log(`You found ${menuChoice.title}!`);
      const newTargets = targets.map((target) =>
        target.title === menuChoice.title ? { ...target, found: true } : target
      );
      setTargets(newTargets);
    }
  };
  return (
    <>
      <TargetBoxContainer location={location} />
      <MenuContainer location={location}>
        <UL>
          {targets.map((target) => (
            <MenuOption key={target.title} onClick={() => handleClick(target)}>
              {target.emoji}
            </MenuOption>
          ))}
        </UL>
      </MenuContainer>
    </>
  );
}

export default Menu;
