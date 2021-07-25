// Libraries
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#e63946" : "white")};
  color: ${(props) => (props.primary ? "white" : "#e63946")};
  font-family: "Roboto", sans-serif;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 2px solid #e63946;
  border-radius: 5px;
  margin: 1rem;
  ${"" /* border: 2px solid ""; */}
  ${"" /* border-radius: 3px; */}

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export default Button;
