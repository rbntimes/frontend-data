import React, { useState, useEffect } from "react";
import { geoEquirectangular, geoPath } from "d3-geo";
import { select, selectAll, event as d3Event } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { min } from "d3-array";
import { feature } from "topojson-client";
import fetch from "isomorphic-unfetch";

const viewBoxWidth = 959;
const viewBoxHeight = 460;
const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;

const projection = geoEquirectangular();

const WorldMap = () => {
  const [land, setLand] = useState(undefined);
  const [marker, showMarker] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMarkerClick = value => {
    setLoading(true);
    showMarker({ name: value.placeName.value, src: value.imageLink.value });
  };

  const handleCountryClick = (data, country) => {
    if (!data) {
      return;
    }
    const currentViewBox = select("#map").attr("viewBox");
    const zoomIsActive = select("#map").attr("viewBox") !== viewBox;

    const clickedPath = select(d3Event.target).node();
    const boundingBox = clickedPath.getBBox();

    const nextViewbox = `${boundingBox.x} ${boundingBox.y} ${boundingBox.width} ${boundingBox.height}`;
    const circleSize = (boundingBox.width % 959) / 100;

    if (zoomIsActive && nextViewbox === currentViewBox) {
      setLand(undefined);
      showMarker(false);
      return select("#map")
        .attr("viewBox", viewBox)
        .selectAll("circle")
        .remove();
    }

    return fetch(`/api/country?skos=${data.termmaster}&limit=${data.count}`)
      .then(results => results.json())
      .then(({ results }) => {
        setLand(country.properties.name);

        select("#map")
          .attr("viewBox", nextViewbox)
          .append("g")
          .selectAll("circle")
          .data(results.bindings)
          .enter()
          .append("circle");

        selectAll("circle")
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
  };

  useEffect(() => {
    fetch("/static/custom.geo.json").then(response => {
      if (response.status !== 200) {
        console.log(`There was a problem: ${response.status}`);
        return;
      }
      response.json().then(worlddata => {
        fetch("/api/getCountries")
          .then(data => data.json())
          .then(data => {
            select("#map")
              .append("g")
              .selectAll("path")
              .data(feature(worlddata, worlddata.objects.countries).features)
              .enter()
              .append("path");

            const colour = scaleLinear()
              .domain([min(Object.keys(data), d => data[d].count), 500])
              .clamp(true)
              .range(["lightgrey", "red"]);

            selectAll("path")
              .attr("d", d => geoPath().projection(projection)(d))
              .attr("stroke", "white")
              .attr("stroke-width", "0.2")
              .attr("data-name", d => d.properties.name)
              .attr("cursor", d =>
                Object.keys(data).includes(d.properties.name)
                  ? "pointer"
                  : "not-allowed"
              )
              .attr("fill", d => colour(
                  Object.keys(data).includes(d.properties.name)
                    ? data[d.properties.name].count
                    : 0
                )
              )
              .on("click", d => handleCountryClick(data[d.properties.name], d));
          });
      });
    });
  }, []);

  return (
    <div className="container">
      <svg id="map" width="100%" height="100%" viewBox={viewBox} />
      <div className="overlay">
        <span>{loading ? "Het plaatje wordt voor u opgehaald.." : ""}</span>
        <div className={!loading && marker ? "content" : ""}>
          <h1>{land}</h1>
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
  );
};

import {Stage} from './stage';
import {ZoomContainer} from './ZoomContainer'

function App() {
  return (
    <Stage width="100%" height={400}>
      <ZoomContainer>
        <WorldMap />
      </ZoomContainer>
    </Stage>
  )
}

export default App;
