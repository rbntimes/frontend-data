import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { useSvg } from "./stage";
import { geoEquirectangular } from "d3-geo";

export function ZoomContainer({ comparingScores, children, data, finished }) {
  const svgElement = useSvg();
  const projection = geoEquirectangular();
  const [{ x, y, k }, setTransform] = useState({ x: 0, y: 0, k: 1 });

  if (data.distance && !comparingScores) {
    var width = 900,
      height = 500;

    const line = d3.select("line");

    const coords = [
        [Number(line.attr("x1")), Number(line.attr("y1"))],
        [Number(line.attr("x2")), Number(line.attr("y2"))]
      ],
      dx = coords[1][0] - coords[0][0],
      dy = coords[1][1] - coords[0][1],
      xx = (coords[0][0] + coords[1][0]) / 2,
      yy = (coords[0][1] + coords[1][1]) / 2,
      scaleArray = [3, 0.9 / Math.max(dx / width, dy / height)],
      scale = Math.min.apply(
        null,
        scaleArray.filter(number => number > 0)
      ),
      translate = [width / 2 - scale * xx, height / 2 - scale * yy];

    d3.select("#map")
      .transition(750)
      .attr("transform", "translate(" + translate + ")scale(" + scale + ")");

    line.style("stroke-width", Math.max(scale, 1) + "px");
    d3.selectAll("circle")
      .style("stroke-width", Math.max(scale, 1) + "px")
      .attr("r", Math.max(scale, 1));
  }

  useEffect(() => {
    if (!svgElement || (finished && !comparingScores)) return;
    const selection = d3.select(svgElement);

    const zoom = d3.zoom().on("zoom", function() {
      setTransform(d3.event.transform);
    });
    selection.call(zoom);
    return () => selection.on(".zoom", null);
  }, [comparingScores, finished, projection, svgElement]);

  return (
    <g id="map" transform={`translate(${x}, ${y}) scale(${k})`}>
      {children}
    </g>
  );
}
