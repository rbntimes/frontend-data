import React, { useState, useEffect } from "react";
// import { select, event as d3Event } from "d3-selection"
import * as d3 from "d3";
import { useSvg } from "./stage";
import { geoEquirectangular, geoPath } from "d3-geo";

export function ZoomContainer({
  children,
  currentScore,
  setScoreMultiplier,
  setVisibleCoordinates
}) {
  const svgElement = useSvg();
  const projection = geoEquirectangular();
  const [{ x, y, k }, setTransform] = useState({ x: 10, y: 10, k: 1 });
  var width = 800,
    height = 400,
    Radius = 20;

  function getVisibleArea(t) {
    var l = t.invert([0, 0]),
      r = t.invert([width, height]);
    return {
      l: [l[0], l[1]],
      r: [r[0], r[1]]
    };
    return (
      Math.trunc(l[0]) +
      " x " +
      Math.trunc(l[1]) +
      "  -  " +
      Math.trunc(r[0]) +
      " x " +
      Math.trunc(r[1])
    );
  }

  useEffect(() => {
    if (!svgElement) return;
    const selection = d3.select(svgElement);

    const zoom = d3.zoom().on("zoom", function() {
      setTransform(d3.event.transform);
      const score = Math.max(Math.floor(d3.event.transform.k - 1), 0);
      if (score !== currentScore) {
        setScoreMultiplier(Math.max(Math.floor(d3.event.transform.k - 1), 0));
        setVisibleCoordinates(getVisibleArea(d3.event.transform));
      }
    });
    selection.call(zoom);
    return () => selection.on(".zoom", null);
  }, [
    currentScore,
    getVisibleArea,
    projection,
    setScoreMultiplier,
    setVisibleCoordinates,
    svgElement
  ]);

  return (
    <g id="map" transform={`translate(${x}, ${y}) scale(${k})`}>
      {children}
    </g>
  );
}
