import React, { useState, useEffect } from "react";
// import { select, event as d3Event } from "d3-selection"
import * as d3 from "d3";
import { useSvg } from "./stage"

export function ZoomContainer({ children }) {
  const svgElement = useSvg();
  const [{ x, y, k }, setTransform] = useState({ x: 10, y: 10, k: 1 });

  useEffect(() => {
    if (!svgElement) return;
    const selection = d3.select(svgElement);
    const zoom = d3.zoom().on("zoom", function() {
      setTransform(d3.event.transform);
    });
    selection.call(zoom);
    return () => selection.on(".zoom", null);
  }, [svgElement]);

  return <g id="map" transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>;
}
