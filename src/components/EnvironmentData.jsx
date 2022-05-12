/*import axios from "axios";
import React, { useState, useEffect } from "react";

const EnvironmentData = () => {
  const [environment, setEnvironment] = useState([]);
  //const lat = 43.653655;
  //const lon = 3.882693;
  //const APIkey = "d1997f4d-a843-4bd1-ac3a-5517c96e3166";
  //const urlAPI = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${APIkey}`
  const urlAPI = `http://api.airvisual.com/v2/nearest_city?lat=43.653655&lon=3.882693&key=d1997f4d-a843-4bd1-ac3a-5517c96e3166`
  //const aqius = res.data.current.pollution.aqius;

  /*useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setEnvironment(res.data)
      console.warn(res.data)
      console.warn(aqius)
    }).catch((error) => console.warn(error))
  }, [])

  useEffect(() => {
    axios.get(urlAPI).then((res) =>
      (res.data)).then(res => {
        console.warn(res)
        console.warn(res.data.current.pollution.aqius)
        setEnvironment(res.data.current.pollution.aqius)
      }).catch((error) => console.warn(error))
  }, [])

  return (<ul>{environment.map((data) => {
    { data }
  })}</ul>);
};

export default EnvironmentData;*/
