import React, { useState, useEffect } from "react";
import { geoEquirectangular, geoPath } from "d3-geo";
import { select, selectAll, event as d3Event } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { min } from "d3-array";
import { feature } from "topojson-client";
import fetch from "isomorphic-unfetch";

const viewBox = "0 0 959 460";

const projection = geoEquirectangular();

const WorldMap = () => {
  const [land, setLand] = useState(undefined);
  const [marker, showMarker] = useState({});

  const handleMarkerClick = value => {
    showMarker({ name: value.placeName.value, src: value.imageLink.value });
  };

  const handleCountryClick = (data, country) => {
    const currentViewBox = select("#map").attr("viewBox");
    const zoomIsActive = select("#map").attr("viewBox") !== viewBox;

    const clickedPath = select(d3Event.target).node();
    const boundingBox = clickedPath.getBBox();

    const nextPath = `${boundingBox.x} ${boundingBox.y} ${boundingBox.width} ${boundingBox.height}`;

    if (zoomIsActive && nextPath === currentViewBox) {
      setLand(undefined);
      showMarker({});
      return select("#map")
        .attr("viewBox", viewBox)
        .selectAll("circle")
        .remove();
    }

    return fetch(`/api/country?skos=${data.skos}&limit=${data.count}`)
      .then(results => results.json())
      .then(({ results }) => {
        setLand(country.properties.name);

        select("#map")
          .attr("viewBox", nextPath)
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
          .attr("r", 0.1)
          .attr("fill", "white")
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
              .range(["lightgrey", "black"]);

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
              .attr("fill", d => {
                console.log(colour(data[d.properties.name]));
                return colour(
                  Object.keys(data).includes(d.properties.name)
                    ? data[d.properties.name].count
                    : 0
                );
              })
              .on("click", d => handleCountryClick(data[d.properties.name], d));
          });
      });
    });
    // fetch("/api/getCountries")
    //   .then(data => data.json())
    //   .then(({ results }) => {
    //     select("#map")
    //       .append("g")
    //       .selectAll("path")
    //       .data(results.bindings)
    //       .enter()
    //       .append("path");
    //
    //     selectAll("path").attr("color", "red");
    // });
  }, []);

  return (
    <div className="container">
      <svg id="map" width={800} height={450} viewBox={viewBox} />
      <div>
        <h1>{land}</h1>
        <h2>{marker.name}</h2>
        <img {...marker} />
      </div>

      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 60% 40%;
            grid-template-rows: 1fr 1fr 1fr;
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

export default WorldMap;
