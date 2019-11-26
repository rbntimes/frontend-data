import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "../components/head";

import { geoEquirectangular, geoPath } from "d3-geo";
import * as d3 from "d3";
import { feature } from "topojson-client";
// import fetch from "isomorphic-unfetch";

// https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx
const viewBoxWidth = 959;
const viewBoxHeight = 460;
const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
import distance from "./../components/distance";
import { Stage } from "./../components/stage";
import Sidebar from "./../components/Sidebar";
import { ZoomContainer } from "./../components/ZoomContainer";
import WorldMap from "./../components/Map";

const Home = ({ randomPlace }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(undefined);
  const [data, onSubmit] = useState({ distance: null });
  const handleForm = () => {
    try {
      fetch(`/api/addScore?distance=${data.distance}&username=${username}`)
        .then(data => data.json())
        .then(response => {
          if (response.message === "success") {
            onSubmit({ distance: null, submitted: true });
            return router.replace("/");
          } else {
            return onSubmit({ ...data });
          }
        });
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <main className="container">
      <Head title="Home" />
      <Sidebar
        data={data}
        setLoading={setLoading}
        loading={loading}
        randomPlace={randomPlace}
        handleForm={handleForm}
        username={username}
        setUsername={setUsername}
      />
      <Stage width={data.distance ? "100%" : "1020px"} height={400}>
        <ZoomContainer data={data} finished={data.distance !== null}>
          <WorldMap
            data={data}
            onSubmit={data => onSubmit(data)}
            marker={randomPlace}
            setLoading={loading => setLoading(loading)}
          />
        </ZoomContainer>
      </Stage>

      <style global jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: ${data.distance ? "2fr" : "1fr"} 4fr;
          }
          .overlay {
            padding: 12px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .content {
            background: white;
          }
          img {
            height: 200px;
          }
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </main>
  );
};

const API_URL =
  "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql";

const API_QUERY = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gn: <http://www.geonames.org/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

# e1n foto per land (met type, img, lat en long van de plaats
SELECT *
WHERE {
# vind alleen foto's
<https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .
?type skos:prefLabel ?typeLabel .
?cho edm:object ?type .

# ?cho dc:title ?title .
?cho edm:isShownBy ?img .

# vind bij de objecten het land
?cho dct:spatial ?place .
?place skos:exactMatch/gn:parentCountry ?land .
# ?place skos:prefLabel ?placeName .
?land gn:name ?landLabel .

# vind bij de plaats van de foto de lat/long
?place skos:exactMatch/wgs84:lat ?lat .
?place skos:exactMatch/wgs84:long ?long .

}
OFFSET RAND() * 5
#100000
LIMIT 1
`;

Home.getInitialProps = async function() {
  const res = await fetch(
    `${API_URL}?query=${encodeURIComponent(API_QUERY)}&format=json`
  );
  const apiData = await res.json();
  const mapFeatures = await fetch(
    "http://localhost:3000/static/custom.geo.json"
  );
  const map = await mapFeatures.json();

  return {
    randomPlace: apiData.results.bindings,
    mapFeatures: map
  };
};

export default Home;
