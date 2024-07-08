import React from "react";

import "./home.scss";
import Banner from "../Banner/Banner";
import Recommend from "../Recommend/Recommend";
import Autors from "../Autors/Autors";
import Reviews from "../reviews/Reviews";
import TrustUs from "../TrustUs/TrustUs";
import Hexagon from "../Hexagon/Hexagon";
import Polygon from "../Polygon/Polygon";

function Home() {
  return (
    <div className="home">
      <Banner />
        <Hexagon />
      <Recommend />
      <Autors />
      <Reviews />
      <TrustUs />
    </div>
  );
}

export default Home;
