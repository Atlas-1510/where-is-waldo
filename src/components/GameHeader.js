// Libraries
import React from "react";

// Components
import Header from "./Header";
import Targets from "./Targets";
import Timer from "./Timer";

function GameHeader({ targets, timerID }) {
  return (
    <Header>
      <Targets targets={targets} />
      <Timer timerID={timerID} />
    </Header>
  );
}

export default GameHeader;
