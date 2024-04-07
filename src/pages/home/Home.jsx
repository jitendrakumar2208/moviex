import React from "react";
import "./Home.scss";
import Hero from "./hero/Hero";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";
const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
