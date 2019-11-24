const url =
  "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql";

// const query = ({ skos, limit }) => `
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>
// PREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>
// PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
// PREFIX geo: <http://www.opengis.net/ont/geosparql#>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX gn: <http://www.geonames.org/ontology#>
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
// PREFIX dbo: <http://dbpedia.org/sparql/>
// PREFIX res: <http://dbpedia.org/resource/>
//
// #35.6895
// #139.69171
//
//
// SELECT * WHERE {
//      # BEELDMATERIALEN
//      <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
//      ?type skos:prefLabel ?typeName .
//     ?cho dct:spatial ?place .
//     ?place skos:exactMatch/gn:parentCountry ?country .
//     ?place skos:exactMatch/gn:name ?placeLabel .
//     ?country gn:name ?countryLabel .
//     ?country rdfs:seeAlso ?countrySeeAlso .
//     ?place skos:exactMatch/rdfs:seeAlso ?placeSeeAlso .
//
//     ?cho dct:spatial ?place ;
//          edm:object ?type ;
//         edm:isShownBy ?imageLink .
//      ?place skos:exactMatch/wgs84:lat ?lat .
//      ?place skos:exactMatch/wgs84:long ?long .
//
//      FILTER()
// }
// # LIMIT 50
// `;

// Meerdere en 1
// const query = () => `
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>
// PREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>
// PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
// PREFIX geo: <http://www.opengis.net/ont/geosparql#>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX gn: <http://www.geonames.org/ontology#>
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//
// # e1n foto per land (met type, img, lat en long van de plaats
// SELECT  (SAMPLE(?cho) AS ?choSample)
//         (SAMPLE(?typeLabel) AS ?typeSample)
//         (SAMPLE(?img) AS ?imgSample)
//         (SAMPLE(?lat) AS ?lat)
//         (SAMPLE(?long) AS ?long)
//         ?landLabel
//         ?randomplace
// WHERE {
//   # vind alleen foto's
//   <https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .
//   ?type skos:prefLabel ?typeLabel .
//   ?cho edm:object ?type .
//
//   # ?cho dc:title ?title .
//   ?cho edm:isShownBy ?img .
//
//   # vind bij de objecten het land
//   ?cho dct:spatial ?place .
//   ?place skos:exactMatch/gn:parentCountry ?land .
// # ?place skos:prefLabel ?placeName .
//   ?land gn:name ?landLabel .
//
//   # vind bij de plaats van de foto de lat/long
//   ?place skos:exactMatch/wgs84:lat ?lat .
//   ?place skos:exactMatch/wgs84:long ?long .
//   { SELECT *
//       WHERE {
//   <https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .
//   ?type skos:prefLabel ?typeLabel .
//   ?cho edm:object ?type .
//
//   # ?cho dc:title ?title .
//   ?cho edm:isShownBy ?img .
//  # vind bij de objecten het land
//   ?cho dct:spatial ?randomplace .
//
//   # vind bij de plaats van de foto de lat/long
//   ?randomplace skos:exactMatch/wgs84:lat ?lat .
//   ?randomplace skos:exactMatch/wgs84:long ?long .
//   } LIMIT 1}
//
// } GROUP BY ?landLabel ?randomplace
// `;

const query = () => `
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
OFFSET RAND() * 100000 LIMIT 1
`;

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  const results = await fetch(
    `${url}?query=${encodeURIComponent(query(req.query))}&format=json`
  );
  const data = await results.json();

  res.end(JSON.stringify(data));
};
