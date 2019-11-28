import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "../components/head";

// https://codesandbox.io/s/creating-visualizations-with-d3-and-react-3ofdx
import { Stage } from "./../components/stage";
import Sidebar from "./../components/Sidebar";
import { ZoomContainer } from "./../components/ZoomContainer";
import WorldMap from "./../components/Map";

// https://stackoverflow.com/a/30707423
function jsonToQueryString(json) {
  return (
    "?" +
    Object.keys(json)
      .map(function(key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
      })
      .join("&")
  );
}

const Home = ({ randomPlace, scoreData }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(undefined);
  const [comparingScores, setComparingScores] = useState(false);
  const [data, onSubmit] = useState({ distance: null });

  const handleForm = async () => {
    const rawResponse = await fetch(
      `https://ionized-protoceratops.glitch.me/addScore${jsonToQueryString({
        username: username,
        score: data.distance,
        cho: data.cho,
        long: data.userClickCoordinations[0],
        lat: data.userClickCoordinations[1]
      })}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );

    const content = await rawResponse.json();

    if (content.message === "success") {
      setComparingScores(true);
    } else {
      return onSubmit({ ...data });
    }
  };

  return (
    <main className="container">
      <Head title="Home" />
      <Sidebar
        onSubmit={onSubmit}
        scoreData={scoreData}
        comparingScores={comparingScores}
        data={data}
        setLoading={setLoading}
        loading={loading}
        randomPlace={randomPlace}
        handleForm={handleForm}
        username={username}
        setUsername={setUsername}
        choSpecificHighscores={scoreData.filter(
          ({ cho }) =>
            Number(
              randomPlace[0].cho.value.split("/")[
                randomPlace[0].cho.value.split("/").length - 1
              ]
            ) === cho
        )}
        setComparingScores={() => setComparingScores(!comparingScores)}
      />
      <Stage width={data.distance ? "100%" : "1020px"} height={400}>
        <ZoomContainer
          comparingScores={comparingScores}
          data={data}
          finished={data.distance !== null}
        >
          <WorldMap
            scoreData={scoreData.filter(
              ({ cho }) =>
                Number(
                  randomPlace[0].cho.value.split("/")[
                    randomPlace[0].cho.value.split("/").length - 1
                  ]
                ) === cho
            )}
            comparingScores={comparingScores}
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
OFFSET RAND() * 20
LIMIT 1
`;

Home.getInitialProps = async function() {
  const res = await fetch(
    `${API_URL}?query=${encodeURIComponent(API_QUERY)}&format=json`
  );
  const apiData = await res.json();

  const scores = await fetch(
    "https://ionized-protoceratops.glitch.me/getScores"
  );
  const scoreData = await scores.json();

  return {
    randomPlace: apiData.results.bindings,
    scoreData: scoreData.sort((x, y) => x.score - y.score)
  };
};

export default Home;
