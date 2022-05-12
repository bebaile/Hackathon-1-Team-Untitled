import React, { useEffect, useState } from "react";
import axios from "axios";
// require("dotenv").config();

const EnvironmentData = () => {
  // const API = `http://api.airvisual.com/v2/nearest_city?lat=43.653655&lon=3.882693&key=${process.env.AQI_API}`;
  const API = `http://api.airvisual.com/v2/nearest_city?lat=43.653655&lon=3.882693&key=d1997f4d-a843-4bd1-ac3a-5517c96e3166`;
  const [environment, setEnvironment] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((resp) => resp.data)
      .then((resp) => {
        console.warn(resp.data.city);
        setEnvironment(resp);
      });
  }, []);
  return <div>{environment}</div>;
};

export default EnvironmentData;
