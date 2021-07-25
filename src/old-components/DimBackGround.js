import styled from "styled-components";

const DimBackGround = styled.div`
  position: absolute;
  display: flex;
  min-height: 100%;
  min-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export default DimBackGround;

// Note for when I start tomorrow:
// Currently trying to figure out how to place VictoryModal in center of screen when victory is detected
// After that, begin work on timer.
