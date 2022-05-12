import React from "react";
// eslint-disable-next-line
import RandomApi from "../components/RandomApi";
import Maps from "../components/Maps";
import EnvironmentData from "../components/EnvironmentData";
import "../assets/App.css";

const Home = () => {
  return (
    <div>
      <Maps />
      <EnvironmentData />
    </div>
  );
};

export default Home;
