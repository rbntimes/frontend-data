import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const Results = ({ newEntry }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://ionized-protoceratops.glitch.me/getScores"
      );
      const data = await res.json();

      setResults(
        [...data, { username: "Jouw naam hier", score: newEntry }].sort(
          (x, y) => x.score - y.score
        )
      );
    }
    getData();
  }, [newEntry]);

  return (
    <table>
      <thead>
        <tr>
          <td>Username:</td>
          <td>Score:</td>
        </tr>
      </thead>
      <tbody>
        {results.map(
          ({ username, score }) =>
            score && (
              <tr
                style={{
                  color: username === "Jouw naam hier" ? "red" : "black"
                }}
                key={Math.random()}
              >
                <td>{username}</td>
                <td>{score}</td>
              </tr>
            )
        )}
      </tbody>
      <style global jsx>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          div {
            width: 100%;
            max-height: 100vh;
            overlay: hidden;
            color: #333;
            font-family: sans-serif;
          }
        `}
      </style>
    </table>
  );
};

export default Results;
