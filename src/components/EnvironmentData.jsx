import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/environmentData.css";

const EnvironmentData = () => {
  const [location, setLocation] = useState("Nantes");
  const [environment, setEnvironment] = useState([]);

  const displayAirquality = () => {
    useEffect(() => {
      const API = `https://api.waqi.info/feed/${location}/?token=830b0f5628f9c274bebec5286621dcb6e38dd0f0`;
      console.warn(API);
      const fetchData = async () => {
        const response = await axios.get(API);
        const data = await response.data.data;
        setEnvironment(data);
      };
      fetchData();
      console.warn(environment.aqi);
    }, []);
  };

  displayAirquality();

  return (
    <>
      <div className="airqualityDiv">
        <div>
          <h1>Indice de qualité de l'air</h1>
          <div>
            Dans la ville de {location}, l'indice de qualité de l'air était de{" "}
            {environment.aqi} à
          </div>
        </div>
      </div>
    </>
  );
};

export default EnvironmentData;
