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

const WorldMap = ({ setMarker, setLoading }) => {
  const handleMarkerClick = value => {
    setMarker({
      country: value.country.value,
      name: value.placeLabel.value,
      src: value.imageLink.value
    });
  };
  useEffect(() => {
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
            const colour = d3
              .scaleLinear()
              .domain([d3.min(Object.keys(data), d => data[d].count), 500])
              .clamp(true)
              .range(["lightgrey", "red"]);

            const circleSize = 2;
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
                d => projection([Number(d.long.value), Number(d.lat.value)])[0]
              )
              .attr(
                "cy",
                d => projection([Number(d.long.value), Number(d.lat.value)])[1]
              )
              .attr("r", circleSize)
              .attr("fill", "blue")
              .attr("stroke-width", circleSize / 2)
              .attr("stroke", "white");
            // .on("click", d => handleMarkerClick(d));
          });

        d3.select("#map").on("click", () => {
          const coords = projection.invert([d3.event.x, d3.event.y]);
          const random = projection.invert([
            d3.select("#random").attr("cx"),
            d3.select("#random").attr("cy")
          ]);
          console.log(
            distance(coords[0], coords[1], random[0], random[1], "M")
          );
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

          return d3
            .select("#map")
            .append("circle")
            .attr("id", "answer")
            .attr("fill", "white")
            .attr("cx", projection([Number(coords[0]), Number(coords[1])])[0])
            .attr("cy", projection([Number(coords[0]), Number(coords[1])])[1])
            .attr("r", 2);
        });

        d3.selectAll("path")
          .attr("d", d => geoPath().projection(projection)(d))
          .attr("stroke", "white")
          .attr("stroke-width", "0.2")
          .attr("data-name", d => d.properties.name);
      });
    });
  }, []);

  return <></>;
};

import { Stage } from "./stage";
import { ZoomContainer } from "./ZoomContainer";

function App() {
  const [marker, showMarker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scoreMultiplier, setScoreMultiplier] = useState(0);
  const [visibleCoordinates, setVisibleCoordinates] = useState(undefined);
  const [userMarker, setUserMarker] = useState(undefined);
  // console.log(visibleCoordinates);

  const Suriname = [333.3705843607251, 234.34369693154835];
  console.log(
    visibleCoordinates &&
      visibleCoordinates.l[0] < Suriname[0] &&
      visibleCoordinates.l[1] < Suriname[1] &&
      visibleCoordinates.r[0] > Suriname[0] &&
      visibleCoordinates.r[1] > Suriname[1]
  );

  return [
    <Stage width="100%" height={400}>
      <ZoomContainer
        currentScore={scoreMultiplier}
        setScoreMultiplier={score => setScoreMultiplier(score)}
        setUserMarker={score => setUserMarker(userMarker)}
        setVisibleCoordinates={coordinates =>
          setVisibleCoordinates(coordinates)
        }
      >
        <WorldMap
          setMarker={marker => showMarker(marker)}
          setLoading={loading => setLoading(loading)}
        />
      </ZoomContainer>
    </Stage>,
    <div className="score">
      <h2>Score multiplier: {scoreMultiplier}</h2>
    </div>,
    <div className="container">
      <div className="overlay">
        <span>{loading ? "Het plaatje wordt voor u opgehaald.." : ""}</span>
        <div className={!loading && marker ? "content" : ""}>
          <h1>{marker.land}</h1>
          <h2>{marker.name}</h2>
          <img
            style={{ display: loading ? "none" : "block" }}
            onLoad={loading ? () => setLoading(false) : () => {}}
            {...marker}
          />
        </div>
      </div>

      <style jsx>
        {`
          .score {
            position: fixed;
            bottom: 0;
          }
          #map {
            max-height: 100vh;
            max-width: 100vw;
          }
          .overlay {
            position: absolute;
            top: 0;
            pointer-events: none;
            height: 70%;
          }
          .content {
            background: white;
            padding: 20px;
          }
          img {
            width: 400px;
            height: auto;
          }
        `}
      </style>
    </div>
  ];
}

export default App;
