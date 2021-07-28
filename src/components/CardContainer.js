import React, { useState } from "react";
import styled from "styled-components";
import { useTransition } from "react-spring";
import Card from "./Card";

const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  width: 100%;
  margin: 2rem 0 2rem 0;

  @media (max-width: 900px) {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

function CardContainer({ levels }) {
  const transition = useTransition(levels, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    delay: 500,
  });
  return (
    <>
      {levels && (
        <Container>
          {transition((style, item) => (
            <Card style={style} levelInfo={item} />
          ))}
        </Container>
      )}
    </>
  );
}

export default CardContainer;

//   {
//     /* {levels.map((level) => (
//     <Card key={level.title} levelInfo={level} />
//   ))} */
//   }

// {
//   /* {levels.map((level) => (
//         <Card key={level.title} levelInfo={level} />
//       ))} */
// }
