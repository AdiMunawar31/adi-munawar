import React from "react";
import { Banner, Footer, Jumbotron, Navbar, Timeline } from "../../component";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Jumbotron />
      <Timeline />
    </div>
  );
};

export default Home;
