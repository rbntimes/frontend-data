import React from "react";
import Head from "../components/head";

import Map from "../components/Map";

const Home = () => (
  <main>
    <Head title="Home" />
    <Map />

    <style jsx>
      {`
        main {
          width: 100%;
          color: #333;
          font-family: sans-serif;
        }
      `}
    </style>
  </main>
);

export default Home;
