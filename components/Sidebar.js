import React from "react";
import Link from "next/link";

import Results from "./Results";

const Sidebar = ({
  data,
  loading,
  randomPlace,
  handleForm,
  username,
  setUsername,
  setLoading
}) => (
  <aside className="overlay">
    <h1>Waar zou de volgende foto gemaakt zijn?</h1>
    <p>
      Weet jij waar de volgende afbeelding genomen is, klik op de goeie plek op
      de map
    </p>
    <img
      style={{ display: loading ? "none" : "block" }}
      onLoad={loading ? () => setLoading(false) : () => {}}
      src={randomPlace[0].img.value}
    />
    {data.distance ? (
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
    ) : null}
    <Results newEntry={data.distance} />
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
      `}
    </style>
  </aside>
);

export default Sidebar;
