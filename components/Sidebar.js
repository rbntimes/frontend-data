import React from "react";
import { useRouter } from "next/router";

import Results from "./Results";

const Sidebar = ({
  data,
  loading,
  randomPlace,
  handleForm,
  username,
  setUsername,
  setLoading,
  comparingScores,
  scoreData,
  onSubmit,
  setComparingScores,
  choSpecificHighscores
}) => {
  const router = useRouter();

  const handleReset = () => {
    setLoading(true);
    setComparingScores();
    onSubmit({ distance: null, submitted: true });
    return router.replace("/");
  };

  return (
    <aside className="overlay">
      <h1>Waar zou de volgende foto gemaakt zijn?</h1>
      <p>
        Weet jij waar de volgende afbeelding genomen is, klik op de goeie plek
        op de map
      </p>
      {loading && (
        <span>Plaatje wordt opgehaald, even geduld alstublieft...</span>
      )}
      <div
        style={{
          display: loading ? "none" : "block",
          height: "400px",
          width: "100%",
          "background-image": `url("${randomPlace[0].img.value}")`,
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat"
        }}
      ></div>
      <img
        style={{ display: "none" }}
        onLoad={loading ? () => setLoading(false) : () => {}}
        src={randomPlace[0].img.value}
      />
      {!data.distance ? (
        <span />
      ) : data.distance && !comparingScores ? (
        <form onSubmit={e => e.preventDefault()}>
          <h1>Jouw score: {data.distance}km</h1>
          <h4>Jij gokte: {data.guessedCountry}</h4>
          <h4>De foto is genomen in: {data.correctCountry}</h4>
          <div>
            <label>
              <input
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </label>
            <button onClick={() => handleForm("/")}>Submit</button>
          </div>
        </form>
      ) : (
        <a className="reset" onClick={() => handleReset()}>
          Opnieuw spelen? Klik hier
        </a>
      )}
      {comparingScores ? (
        <Results
          choSpecificHighscores={choSpecificHighscores}
          scoreData={scoreData}
          comparingScores={comparingScores}
          newEntry={{ score: data.distance, username }}
        />
      ) : !comparingScores && data.finished ? (
        <span />
      ) : (
        <span />
      )}
      <style jsx>
        {`
          aside {
            height: 96vh;
            overflow: scroll;
          }
          :global(body) {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          form > div {
            display: flex;
          }
          .reset {
            text-decoration: underline;
            text-align: center;
            margin: 10px 0;
            cursor: pointer;
          }
        `}
      </style>
    </aside>
  );
};

export default Sidebar;
