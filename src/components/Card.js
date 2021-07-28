// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

// utils
import getImageFromFirestore from "../utils/getImageFromFirestore";

const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8f2cf;
  overflow: hidden;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const ImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 80vw;
    height: 200px;
  }

  @media (max-width: 350px) {
    width: 80vw;
    height: 100px;
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 100%;
`;

const LevelInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

const LevelTitle = styled(animated.span)`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
`;

const TargetContainer = styled.div`
  display: flex;
`;

const TargetImage = styled.img`
  height: 30px;
  margin-left: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Card({ levelInfo }) {
  const [level, setLevel] = useState(null);

  function getMultiImagesFromFirestore(targets) {
    const promises = targets.map(async (target) => {
      return {
        ...target,
        found: false,
        image: await getImageFromFirestore(target.image),
      };
    });
    return Promise.all(promises);
  }

  useEffect(() => {
    let mounted = false;
    (async function getLevelImages() {
      const map = await getImageFromFirestore(levelInfo.image);
      const targets = await getMultiImagesFromFirestore(levelInfo.targets);
      if (!mounted) {
        setLevel({
          ...levelInfo,
          image: map,
          targets,
        });
      }
      return () => {
        mounted = true;
      };
    })();
  }, [levelInfo]);

  const [hover, setHover] = useState(false);

  const spring = useSpring({
    y: hover ? -10 : 0,
    backgroundColor: hover
      ? "rgba(100, 100, 255, 0.25)"
      : "rgba(255, 255, 255, 0.25)",
  });

  const titleSpring = useSpring({
    fontSize: hover ? "1.5rem" : "1rem",
  });

  return (
    <>
      {level && (
        <StyledLink
          to={{
            pathname: "/game",
            state: { level },
          }}
          exact="true"
        >
          <Container
            style={spring}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <ImageContainer>
              <Image src={level.image} />
            </ImageContainer>
            <LevelInfo>
              <LevelTitle style={titleSpring}>{level.title}</LevelTitle>
              <TargetContainer>
                {level.targets.map((target) => (
                  <TargetImage key={target.name} src={target.image} />
                ))}
              </TargetContainer>
            </LevelInfo>
          </Container>
        </StyledLink>
      )}
    </>
  );
}

export default Card;
