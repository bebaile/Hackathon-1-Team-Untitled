import React from "react";
import RandomApi from "../components/RandomApi";
import Maps from "../components/Maps";
import EnvironmentData from "../components/EnvironmentData";

const Home = () => {
  return (
    <div>
      <Maps />
      <EnvironmentData />
    </div>
  );
};

export default Home;
