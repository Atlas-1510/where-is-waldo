// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Hooks
import { storage } from "../firebase/firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #d8f2cf;
  overflow: hidden;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const ImageContainer = styled.div`
  width: 375px;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 80vw;
    height: 200px;
  }
`;

const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
`;

const LevelInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

const LevelTitle = styled.span`
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

  // These functions unpack the info from firestore and convert into usable assets
  async function getImageFromFirestore(url) {
    const ref = storage.refFromURL(url);
    const mapImage = await ref
      .getDownloadURL()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));

    return mapImage;
  }
  const getTargetImages = (targets) => {
    const promises = targets.map(async (target) => {
      return {
        ...target,
        image: await getImageFromFirestore(target.image),
      };
    });
    return Promise.all(promises);
  };

  useEffect(() => {
    (async function getLevelImages() {
      const map = await getImageFromFirestore(levelInfo.image);
      const targets = await getTargetImages(levelInfo.targets);

      setLevel({
        ...levelInfo,
        image: map,
        targets,
      });
    })();
  }, []);

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
          <Container>
            <ImageContainer>
              <Image src={level.image} />
            </ImageContainer>
            <LevelInfo>
              <LevelTitle>{level.title}</LevelTitle>
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
