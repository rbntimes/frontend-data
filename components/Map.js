import React, { useState, useEffect } from "react";
import { geoEquirectangular, geoPath } from "d3-geo";
import * as d3 from 'd3'
import { feature } from "topojson-client";
import fetch from "isomorphic-unfetch";
// https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx
const viewBoxWidth = 959;
const viewBoxHeight = 460;
const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;

const projection = geoEquirectangular();

const WorldMap = ({setMarker, setLoading}) => {
  const handleMarkerClick = value => {
    setMarker({ country: value.country.value, name: value.placeLabel.value, src: value.imageLink.value });
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

          d3.selectAll("path")
            .attr("d", d => geoPath().projection(projection)(d))
            .attr("stroke", "white")
            .attr("stroke-width", "0.2")
            .attr("data-name", d => d.properties.name)

        fetch("/api/country")
          .then(data => data.json())
          .then(data => {
            const colour = d3.scaleLinear()
              .domain([d3.min(Object.keys(data), d => data[d].count), 500])
              .clamp(true)
              .range(["lightgrey", "red"]);

            const circleSize = 2;

            d3.select("#map")
              .append("g")
              .selectAll("circle")
              .data(data.results.bindings)
              .enter()
              .append("circle");

            d3.selectAll("circle")
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
              .attr("stroke", "white")
              .on("click", d => handleMarkerClick(d));
          });
      });
    });
  }, []);
  return <></>;
};

import {Stage} from './stage';
import {ZoomContainer} from './ZoomContainer'

function App() {
  const [marker, showMarker] = useState(false);
  const [loading, setLoading] = useState(false);
  return [
    <Stage width="100%" height={400}>
      <ZoomContainer>
        <WorldMap setMarker={marker => showMarker(marker)} setLoading={loading => setLoading(loading)} />
      </ZoomContainer>
    </Stage>
    ,
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
  ]
}

export default App;
