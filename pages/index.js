import React from "react";
import Head from "../components/head";

import Map from "../components/Map";

const Home = () => (
  <main>
    <Head title="Home" />
    <Map />

    <style global jsx>
      {`
        body {
          margin: 0;
          padding: 0;
        }
        main {
          width: 100%;
          max-height: 100vh;
          overlay: hidden;
          color: #333;
          font-family: sans-serif;
        }
      `}
    </style>
  </main>
);

export default Home;
