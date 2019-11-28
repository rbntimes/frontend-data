import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const Results = ({ newEntry, scoreData, choSpecificHighscores }) => {
  const results = [...scoreData, newEntry].sort((x, y) => x.score - y.score);

  const choSpecificHighscoresResults = [
    ...choSpecificHighscores,
    newEntry
  ].sort((x, y) => x.score - y.score);

  return (
    <div className="container">
      <div>
        <h4>Top 5 (alle foto's)</h4>
        <table>
          <thead>
            <tr>
              <td>Username:</td>
              <td>Score:</td>
            </tr>
          </thead>
          <tbody>
            {results.slice(0, 5).map(
              ({ username, score }) =>
                score && (
                  <tr
                    style={{
                      color: username === newEntry.username ? "red" : "black"
                    }}
                    key={Math.random()}
                  >
                    <td>{username}</td>
                    <td>{score}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      <div>
        <h4>Highscores deze foto:</h4>
        <table>
          <thead>
            <tr>
              <td>Username:</td>
              <td>Score:</td>
            </tr>
          </thead>
          <tbody>
            {choSpecificHighscoresResults.map(
              ({ username, score }) =>
                score && (
                  <tr
                    style={{
                      color: username === newEntry.username ? "red" : "black"
                    }}
                    key={Math.random()}
                  >
                    <td>{username}</td>
                    <td>{score}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          container {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default Results;
