import React from "react";
import Head from "../components/head";

// import Map from "../components/Map";

const Results = ({ data }) => (
  <main>
    <Head title="Home" />
    <table>
      <thead>
        <tr>
          <td>Username:</td>
          <td>Score:</td>
        </tr>
      </thead>
      <tbody>
        {data.map(({ username, score }) => (
          <tr key={`${username}+${score}`}>
            <td>{username}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <style global jsx>
      {`
        body {
          margin: 0;
          padding: 0;
        }
        main {
          width: 100%;
          max-height: 100vh;
          overlay: hidden;
          color: #333;
          font-family: sans-serif;
        }
      `}
    </style>
  </main>
);

Results.getInitialProps = async function() {
  const res = await fetch("https://ionized-protoceratops.glitch.me/getScores");
  const data = await res.json();

  return {
    data
  };
};

export default Results;
