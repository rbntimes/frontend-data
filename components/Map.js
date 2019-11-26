import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { geoEquirectangular, geoPath } from "d3-geo";
import * as d3 from "d3";
import { feature } from "topojson-client";
import fetch from "isomorphic-unfetch";

// https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx
import distance from "./distance";

const projection = geoEquirectangular();

class Map extends React.Component {
  componentDidMount() {
    const {
      marker,
      onSubmit,
      userClickCoordinations,
      randomPlaceCoordinations
    } = this.props;
    console.log("mount");
    const map = d3.select("#map");
    // First create the world
    fetch("/static/custom.geo.json").then(response => {
      if (response.status !== 200) {
        console.log(`There was a problem: ${response.status}`);
        return;
      }
      response.json().then(worlddata => {
        map
          .append("g")
          .selectAll("path")
          .data(feature(worlddata, worlddata.objects.countries).features)
          .enter()
          .append("path")
          .attr("d", d => geoPath().projection(projection)(d))
          .attr("stroke", "white")
          .attr("stroke-width", "0.2")
          .attr("id", d => d.properties.name);

        // const colour = d3
        //   .scaleLinear()
        //   .domain([d3.min(Object.keys(data), d => data[d].count), 500])
        //   .clamp(true)
        //   .range(["lightgrey", "red"]);

        map.append("g").attr("id", "markers");

        this.drawMarker(marker);
        map.on("click", () => this.handleClick());
      });
    });
  }

  handleClick() {
    const map = d3.select("#map");
    const { marker, onSubmit } = this.props;
    // Fill color of clicked country depending on answer
    const clickedCountry = d3.select(d3.event.target);
    const userGuessedCountry =
      clickedCountry.attr("id") === marker[0].landLabel.value;

    if (userGuessedCountry) {
      // Correct country was selected
      clickedCountry.attr("fill", "green");
    } else {
      clickedCountry.attr("fill", "red");
      d3.select(`#${marker[0].landLabel.value}`).attr("fill", "green");
    }

    // Use clientPoint to check where user clicked and invert it againt projection
    // https://stackoverflow.com/questions/48083536/react-v16-d3-v4-when-using-mouse-from-d3-selection-will-get-typeerror-cannot
    const userClickCoordinations = projection.invert(
      d3.clientPoint(d3.event.target, d3.event)
    );
    const randomPlaceCoordinations = projection.invert([
      d3.select("#randomplace").attr("cx"),
      d3.select("#randomplace").attr("cy")
    ]);

    // Drawing line between coordinates of mouseclick and the marker randomly fetched from server
    // https://stackoverflow.com/questions/43945356/drawing-line-between-two-projected-points-on-map-no-line-showing-d3-js
    map
      .select("#markers")
      .data(userClickCoordinations)
      .insert("line", "#randomplace")
      .attr(
        "x1",
        projection([
          Number(userClickCoordinations[0]),
          Number(userClickCoordinations[1])
        ])[0]
      )
      .attr(
        "y1",
        projection([
          Number(userClickCoordinations[0]),
          Number(userClickCoordinations[1])
        ])[1]
      )
      .attr(
        "x2",
        projection([
          Number(randomPlaceCoordinations[0]),
          Number(randomPlaceCoordinations[1])
        ])[0]
      )
      .attr(
        "y2",
        projection([
          Number(randomPlaceCoordinations[0]),
          Number(randomPlaceCoordinations[1])
        ])[1]
      )
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("fill", "none");

    // Also add marker on top of where user pressed
    map
      .select("#markers")
      .append("circle")
      .attr("id", "answer")
      .attr("fill", "blue")
      .attr("stroke-width", 2 / 2)
      .attr("stroke", "white")
      .attr(
        "cx",
        projection([
          Number(userClickCoordinations[0]),
          Number(userClickCoordinations[1])
        ])[0]
      )
      .attr(
        "cy",
        projection([
          Number(userClickCoordinations[0]),
          Number(userClickCoordinations[1])
        ])[1]
      )
      .attr("r", 2);

    return onSubmit({
      finished: true,
      userClickCoordinations,
      randomPlaceCoordinations,
      correctCountry: marker[0].landLabel.value,
      guessedCountry: d3.select(d3.event.target).attr("id"),
      distance: distance(
        userClickCoordinations[0],
        userClickCoordinations[1],
        randomPlaceCoordinations[0],
        randomPlaceCoordinations[1],
        "M"
      ),
      userGuessedCountry
    });
  }

  drawMarker(marker) {
    d3.select("#markers")
      .selectAll("circle")
      .data(marker)
      .enter()
      .append("circle")
      .attr("id", "randomplace")
      .attr(
        "cx",
        d => projection([Number(d.long.value), Number(d.lat.value)])[0]
      )
      .attr(
        "cy",
        d => projection([Number(d.long.value), Number(d.lat.value)])[1]
      )
      .attr("r", 2)
      .attr("fill", "blue")
      .attr("stroke-width", 2 / 2)
      .attr("stroke", "white");
  }

  resetMap() {
    d3.select("#markers")
      .selectAll("*")
      .remove();
    d3.selectAll("path").attr("fill", "black");
    d3.select("#map").on("click", () => this.handleClick());
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.data.distance === null && nextProps.data.submitted) {
      this.resetMap();
      this.drawMarker(nextProps.marker);
      return true;
    } else if (nextProps.data.finished) {
      return d3.select("#map").on("click", null);
      return false;
    }

    return false;
  }

  render() {
    return <></>;
  }
}

Map.propTypes = {
  onSubmit: PropTypes.func,
  marker: PropTypes.shape
};

export default Map;
