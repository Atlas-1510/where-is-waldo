import styled from "styled-components";

const TargetBoxContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(100, 100, 255, 0.7);
  position: absolute;
  left: ${(props) => String(props.location.x + "px")};
  top: ${(props) => String(props.location.y + "px")};
  transform: translate(-50%, -50%);
  border: 2px dotted rgba(50, 50, 255, 0.7);
`;

export default TargetBoxContainer;
