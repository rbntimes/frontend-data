import React, { useEffect, useRef, useState } from "react";

const Context = React.createContext(null);

const viewBoxWidth = 959;
const viewBoxHeight = 460;
const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;

export function Stage({ width, height, children }) {
  const svgRef = useRef(null);
  const [svg, setSvg] = useState(null);
  useEffect(() => setSvg(svgRef.current), []);

  return (
    <svg ref={svgRef} width="100%" height="100%" viewBox={viewBox}>
      <Context.Provider value={svg}>{children}</Context.Provider>
    </svg>
  );
}

export function useSvg() {
  return React.useContext(Context);
}
