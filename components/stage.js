import React, { useEffect, useRef, useState } from "react";

const Context = React.createContext(null);

const viewBoxWidth = 959;
const viewBoxHeight = 460;

const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;

export function Stage({ children }) {
  const svgRef = useRef(null);
  const [svg, setSvg] = useState(null);
  useEffect(() => setSvg(svgRef.current), []);

  return (
    <svg ref={svgRef} width="1020px" height={`calc(100vh)`} viewBox={viewBox}>
      <Context.Provider value={svg}>{children}</Context.Provider>
      <style jsx>
        {`
          svg {
            background-color: cornflowerblue;
          }
        `}
      </style>
    </svg>
  );
}

export function useSvg() {
  return React.useContext(Context);
}
