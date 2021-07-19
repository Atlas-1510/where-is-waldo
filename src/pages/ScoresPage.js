// Libraries
import React from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Button from "../components/Button";
import InfoBox from "../components/InfoBox";

const Container = styled.main`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-left: 1rem;
`;

const Table = styled.table`
  width: 40rem;
  text-align: center;
`;

// TODO: Remove test scores data
const testScores = [
  {
    rank: 1,
    user: "Test User Name",
    time: "01:14",
  },
  {
    rank: 2,
    user: "Test User Name",
    time: "01:14",
  },
  {
    rank: 3,
    user: "Test User Name",
    time: "01:14",
  },
  {
    rank: 4,
    user: "Test User Name",
    time: "01:14",
  },
  {
    rank: 5,
    user: "Test User Name",
    time: "01:14",
  },
  {
    rank: 6,
    user: "Test User Name",
    time: "01:14",
  },
  {
    rank: 7,
    user: "Test User Name",
    time: "01:14",
  },
];

function ScoresPage() {
  return (
    <Container>
      <Header>
        <Title>High Scores</Title>
        <Button title={"Play Again"} />
      </Header>
      <InfoBox>
        <Table>
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
            {testScores.map((score) => (
              <tr>
                <td>{score.rank}</td>
                <td>{score.user}</td>
                <td>{score.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </InfoBox>
    </Container>
  );
}

export default ScoresPage;
