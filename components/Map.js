import React, { useState, useEffect } from "react";
import { geoEquirectangular, geoPath } from "d3-geo";
import * as d3 from "d3";
import { feature } from "topojson-client";
import fetch from "isomorphic-unfetch";

// https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx
const viewBoxWidth = 959;
const viewBoxHeight = 460;
const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
import distance from "./distance";

const projection = geoEquirectangular();

const WorldMap = ({
  setMarker,
  setLoading,
  guessedDistance,
  setGuessedDistance,
  marker
}) => {
  useEffect(() => {
    if (!guessedDistance && !marker) {
      fetch("/static/custom.geo.json").then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`);
          return;
        }
        response.json().then(worlddata => {
          d3.select("#map")
            .append("g")
            .selectAll("path")
            .data(feature(worlddata, worlddata.objects.countries).features)
            .enter()
            .append("path");

          fetch("/api/country")
            .then(data => data.json())
            .then(data => {
              setMarker({
                country: data.results.bindings[0].landLabel.value,
                src: data.results.bindings[0].img.value
              });
              const colour = d3
                .scaleLinear()
                .domain([d3.min(Object.keys(data), d => data[d].count), 500])
                .clamp(true)
                .range(["lightgrey", "red"]);

              console.log(data);
              d3.select("#map")
                .append("g")
                .selectAll("circle")
                .data(data.results.bindings)
                .enter()
                .append("circle");

              d3.selectAll("circle")
                .attr("id", "random")
                .attr(
                  "cx",
                  d =>
                    projection([Number(d.long.value), Number(d.lat.value)])[0]
                )
                .attr(
                  "cy",
                  d =>
                    projection([Number(d.long.value), Number(d.lat.value)])[1]
                )
                .attr("r", 2)
                .attr("fill", "blue")
                .attr("stroke-width", 2 / 2)
                .attr("stroke", "white");
              // .on("click", d => handleMarkerClick(d));
            });

          d3.select("#map").on("click", e => {
            // Remove click listener from Map

            // Guess clientPoint works better then d3.mouse
            // https://stackoverflow.com/questions/48083536/react-v16-d3-v4-when-using-mouse-from-d3-selection-will-get-typeerror-cannot
            const coords = projection.invert(
              d3.clientPoint(d3.event.target, d3.event)
            );
            const random = projection.invert([
              d3.select("#random").attr("cx"),
              d3.select("#random").attr("cy")
            ]);

            // SO HELP ME GOD
            // https://stackoverflow.com/questions/25393163/d3-js-how-to-calculate-accurately-the-mercator-transformation-ratio-r
            // https://stackoverflow.com/questions/43945356/drawing-line-between-two-projected-points-on-map-no-line-showing-d3-js
            d3.select("#map")
              .selectAll("line")
              .data(coords)
              .enter()
              .append("line")
              .attr("x1", projection([Number(coords[0]), Number(coords[1])])[0])
              .attr("y1", projection([Number(coords[0]), Number(coords[1])])[1])
              .attr("x2", projection([Number(random[0]), Number(random[1])])[0])
              .attr("y2", projection([Number(random[0]), Number(random[1])])[1])
              .attr("stroke", "blue")
              .attr("stroke-width", 2)
              .attr("fill", "none");

            d3.select("#map")
              .append("circle")
              .attr("id", "answer")
              .attr("fill", "blue")
              .attr("stroke-width", 2 / 2)
              .attr("stroke", "white")
              .attr("cx", projection([Number(coords[0]), Number(coords[1])])[0])
              .attr("cy", projection([Number(coords[0]), Number(coords[1])])[1])
              .attr("r", 2);

            setGuessedDistance(
              distance(coords[0], coords[1], random[0], random[1], "M")
            );

            return d3.select("#map").on("click", null);
          });

          d3.selectAll("path")
            .attr("d", d => geoPath().projection(projection)(d))
            .attr("stroke", "white")
            .attr("stroke-width", "0.2")
            .attr("data-name", d => d.properties.name);
        });
      });
    }
  }, [guessedDistance, marker, setGuessedDistance, setMarker]);

  return <></>;
};

import { Stage } from "./stage";
import { ZoomContainer } from "./ZoomContainer";

const handleForm = (event, distance, username) => {
  event.preventDefault();
  try {
    fetch(`/api/addScore?distance=${distance}&username=${username}`);
  } catch (e) {
    console.log(e, "error");
  }
};

function App() {
  const [marker, showMarker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(undefined);
  const [scoreMultiplier, setScoreMultiplier] = useState(0);
  const [userMarker, setUserMarker] = useState(undefined);
  const [guessedDistance, setGuessedDistance] = useState(undefined);

  return (
    <div className="container">
      <div className="overlay">
        <h1>Waar ben ik?</h1>
        <p>
          Weet jij waar de volgende afbeelding genomen is, klik op de goeie plek
          op de map
        </p>
        <img
          style={{ display: loading ? "none" : "block" }}
          onLoad={loading ? () => setLoading(false) : () => {}}
          {...marker}
        />
        {guessedDistance ? (
          <form onSubmit={e => handleForm(e, guessedDistance, username)}>
            <h1>Jouw score: {guessedDistance}</h1>
            <label>
              Jouw username:{" "}
              <input
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </label>
          </form>
        ) : null}
      </div>
      <Stage width="100%" height={400}>
        <ZoomContainer
          currentScore={scoreMultiplier}
          setScoreMultiplier={score => setScoreMultiplier(score)}
          setUserMarker={() => setUserMarker(userMarker)}
        >
          <WorldMap
            guessedDistance={guessedDistance}
            setGuessedDistance={guessedDistance =>
              setGuessedDistance(guessedDistance)
            }
            marker={marker}
            setMarker={marker => showMarker(marker)}
            setLoading={loading => setLoading(loading)}
          />
        </ZoomContainer>
      </Stage>

      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 4fr;
          }

          .overlay {
            pointer-events: none;
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .content {
            background: white;
          }
          img {
            height: 200px;
          }
        `}
      </style>
    </div>
  );
}

export default App;
