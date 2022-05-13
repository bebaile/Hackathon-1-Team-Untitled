import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomApi = () => {
  const [vehicle, setVehicle] = useState({});
  const API = "https://random-data-api.com/api/vehicle/random_vehicle";
  const AQIAPI =
    "https://api.waqi.info/feed/Montpellier/?token=830b0f5628f9c274bebec5286621dcb6e38dd0f0";

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(API);
        setVehicle(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVehicle();
  }, []);

  const [environment, setEnvironment] = useState();
  useEffect(() => {
    const fetchAirquality = async () => {
      try {
        const response = await axios.get(AQIAPI);
        setEnvironment(response.data.data.aqi);
        console.warn(response.data);
        console.warn(response.data.data.aqi);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAirquality();
  }, []);

  console.error(environment);
  return (
    <>
      <div>
        <h1>Random API - vehicle</h1>
        <h2>{vehicle.make_and_model}</h2>
      </div>
      <div>
        <h1>Air quality</h1>
        <h2>{environment}</h2>
      </div>
    </>
  );
};

export default RandomApi;
