// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Hooks
import { storage } from "../firebase/firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* margin: 1rem; */}
  border: ${(props) =>
    props.active ? "1px solid rgba(100, 100, 255, 0.1)" : "1px solid #d8f2cf"};
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background-color: ${(props) =>
    props.active ? "rgba(100, 100, 255, 0.25)" : "rgba(255, 255, 255, 0.25)"};
`;

const ImageContainer = styled.div`
  min-width: 100%;
  height: 125px;
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

function LeaderboardCard({ levelInfo, activeLevel, setLevel }) {
  const [levelView, setLevelView] = useState(null);
  const [active, setActive] = useState(false);

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

  useEffect(() => {
    (async function getLevelImages() {
      const map = await getImageFromFirestore(levelInfo.image);

      setLevelView({
        ...levelInfo,
        image: map,
      });
    })();
  }, [levelInfo]);

  useEffect(() => {
    if (activeLevel === levelInfo.id) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeLevel, levelInfo]);

  return (
    <>
      {levelView && (
        <Container onClick={() => setLevel(levelInfo.id)} active={active}>
          <ImageContainer>
            <Image src={levelView.image} />
          </ImageContainer>
          <LevelInfo>
            <LevelTitle>{levelView.title}</LevelTitle>
          </LevelInfo>
        </Container>
      )}
    </>
  );
}

export default LeaderboardCard;
