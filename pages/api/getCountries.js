const url =
  "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql";

// const query = `
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
// PREFIX gn: <http://www.geonames.org/ontology#>
//
// SELECT ?countryLabel
//        (COUNT(?cho) AS ?choCount)
// WHERE {
//   <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
//   ?cho edm:object ?type .
//
//   ?cho dct:spatial ?place . # obj place
//   ?place skos:exactMatch/gn:parentCountry ?country .
//   ?country gn:name ?countryLabel .
//
// } GROUP BY ?country ?countryLabel
// ORDER BY DESC(?choCount)
// `;

// const query = `
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
//        #?parentLabel
// WHERE {
//   <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
//   ?cho edm:object ?type .
//
//   ?cho dct:spatial ?place . # obj place
//   ?place skos:exactMatch/gn:parentCountry ?country .
//   ?country gn:name ?countryLabel .
//   ?place skos:exactMatch/ ?parent.
//   #  ?place skos:broader/skos:prefLabel ?parentLabel
//   #BIND(IF(?parent, "<1M", "0") as ?var)
//   #BIND(
//   #  IF(?place  = ?countryLabel, "JAA", ?place gn:name ?test) as ?var
//   #)
// }
//  GROUP BY ?country ?countryLabel ?parent
// #?parentLabel
// ORDER BY ASC(?countryLabel)
// `;

const query = `
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX gn: <http://www.geonames.org/ontology#>

SELECT ?countryLabel
       (COUNT(?cho) AS ?choCount)
       ?parent
       ?var
       ?varTest
WHERE {
  <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
  ?cho edm:object ?type .

  ?cho dct:spatial ?place . # obj place
  ?place skos:exactMatch/gn:parentCountry ?country .
  ?country gn:name ?countryLabel .
  ?place skos:exactMatch/gn:parentCountry ?parent.
  ?place skos:broader* ?var .
  ?var skos:exactMatch/gn:name ?varTest .

  FILTER(contains(?varTest, ?countryLabel))

  #  ?place skos:broader/skos:prefLabel ?parentLabel
  #BIND(IF(?parent, "<1M", ?place skos:exactMatch ?var) as ?var)
  #BIND(
  #  IF(?place != '', "JAA", ) as ?var
  #)
}
 GROUP BY ?country ?countryLabel  ?var ?varTest  ?parent

ORDER BY ASC(?choCount)
`;

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  const results = await fetch(
    `${url}?query=${encodeURIComponent(query)}&format=json`
  );
  const data = await results.json();

  // const cleanData = data.results.bindings.reduce(
  //   (prev, next) => ({
  //     ...prev,
  //     [next.countryLabel.value]: {
  //       country: next.countryLabel.value,
  //       skos: next.parent.value,
  //       count:
  //         Number(
  //           prev[next.countryLabel.value]
  //             ? prev[next.countryLabel.value].count
  //             : 0
  //         ) + Number(next.choCount.value)
  //     }
  //   }),
  //   []
  // );
  const cleanData = data.results.bindings.reduce(
    (prev, next) => ({
      ...prev,
      [next.countryLabel.value]: {
        country: next.countryLabel.value,
        skos: next.var.value,
        count: next.choCount.value
      }
    }),
    []
  );

  res.end(JSON.stringify(cleanData));
};
