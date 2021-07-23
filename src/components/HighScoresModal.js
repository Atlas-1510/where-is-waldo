// Libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import InfoBox from "./InfoBox";
import Button from "./Button";

// Hooks
import useFirestore from "../hooks/useFirestore";

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

function HighScoresModal({ mapID }) {
  // TODO pass mapID in ref string to useFirestore
  const { docs: scores } = useFirestore(`maps/${mapID}/scores`, "time");

  return (
    <InfoBox>
      <Table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
          {scores.map((score) => (
            <tr>
              <td>{score.title}</td>
              <td>{score.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link exact to="/">
        <Button title={"Play Again"} />
      </Link>
    </InfoBox>
  );
}

export default HighScoresModal;
