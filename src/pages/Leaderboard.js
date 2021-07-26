// Libraries
import React from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Logo from "../components/Logo";
import LeaderboardCard from "../components/LeaderboardCard";
import Footer from "../components/Footer";

// Hooks
import useFirestore from "../hooks/useFirestore";

// TODO: Remove test scores data
const testScores = [
  {
    rank: 1,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 2,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 3,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 4,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 5,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 6,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 7,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 4,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 5,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 6,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 7,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 4,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 5,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 6,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 7,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 4,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 5,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 6,
    title: "Test User Name",
    time: "01:14",
  },
  {
    rank: 7,
    title: "Test User Name",
    time: "01:14",
  },
];

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1faee;
  min-height: 100%;
`;

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  margin: 1rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
    width: 100px;
  }
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem 5rem 2rem 5rem;

  @media (max-width: 900px) {
    margin: 1rem;
    height: 50vh;
  }

  @media (max-width: 350px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin: 1rem;
    height: 75vh;
  }
`;

const TableContainer = styled.div`
  font-family: "Roboto", sans-serif;
  width: 60%;
  max-height: 50vh;
  overflow: scroll;
  border-radius: 15px;
  display: grid;
  place-items: center;
  position: relative;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Table = styled.table`
  position: relative;
  table-layout: fixed;
  width: 90%;
  border-collapse: collapse;
  border: 3px solid purple;
  text-align: center;
  overflow: hidden;
  border-radius: 15px;
`;

const TableHead = styled.thead`
  position: relative;
`;

const TH = styled.th`
  padding: 20px;
  letter-spacing: 2px;
  position: sticky;
  top: 0;
`;

const TR = styled.tr`
  border-bottom: 1px solid lightgrey;
`;

const TD = styled.td`
  padding: 20px;
  letter-spacing: 1px;
`;

function Leaderboard() {
  const { docs: levels } = useFirestore("levels", "level");

  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Title>Leaderboard</Title>
      <CardContainer>
        {levels.map((level) => (
          <LeaderboardCard key={level.title} levelInfo={level} />
        ))}
      </CardContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <tr>
              <TH>Name</TH>
              <TH>Time</TH>
            </tr>
          </TableHead>
          <tbody>
            {testScores.map((score) => (
              <TR>
                <TD>{score.title}</TD>
                <TD>{score.time}</TD>
              </TR>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <Footer />
    </Container>
  );
}

export default Leaderboard;
