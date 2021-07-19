// Libraries
import React from "react";

// Components
import Header from "./Header";
import Targets from "./Targets";
import Timer from "./Timer";

function GameHeader({ targets }) {
  return (
    <Header>
      <Targets targets={targets} />
      <Timer />
    </Header>
  );
}

export default GameHeader;
