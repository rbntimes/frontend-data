const url =
  "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql";

// This query was written by me, had the same result but in a much "uglier" way
// const oldQuery = `
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
// PREFIX gn: <http://www.geonames.org/ontology#>
//
// SELECT ?countryLabel
//        (COUNT(?cho) AS ?choCount)
//        ?parent
//        ?var
//        ?varTest
// WHERE {
//   <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
//   ?cho edm:object ?type .
//
//   ?cho dct:spatial ?place . # obj place
//   ?place skos:exactMatch/gn:parentCountry ?country .
//   ?country gn:name ?countryLabel .
//   ?place skos:exactMatch/gn:parentCountry ?parent.
//   ?place skos:broader* ?var .
//   ?var skos:exactMatch/gn:name ?varTest .
//
//   FILTER(contains(?varTest, ?countryLabel))
// }
//  GROUP BY ?country ?countryLabel  ?var ?varTest  ?parent
//
// ORDER BY ASC(?choCount)
// `;

// With the help of Ivo this query should get all the countries with the right termmaster:
const query = `
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
  PREFIX gn: <http://www.geonames.org/ontology#>
  SELECT ?countryLabel ?landTM
  (COUNT(?cho) AS ?choCount)
  WHERE {
    <https://hdl.handle.net/20.500.11840/termmaster15161> skos:narrower* ?type .
    ?cho edm:object ?type .
    ?cho dct:spatial ?place .
    ?place skos:exactMatch/gn:parentCountry ?country .
    ?country gn:name ?countryLabel .
    ?landTM skos:exactMatch ?country .
  } GROUP BY ?country ?countryLabel ?landTM
  ORDER BY DESC(?choCount)
`;

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  const results = await fetch(
    `${url}?query=${encodeURIComponent(query)}&format=json`
  );
  const data = await results.json();

  const cleanData = data.results.bindings.reduce(
    (prev, next) => ({
      ...prev,
      [next.countryLabel.value]: {
        country: next.countryLabel.value,
        termmaster: next.landTM.value,
        count: next.choCount.value
      }
    }),
    []
  );

  res.end(JSON.stringify(cleanData));
};
