import React, { useState, useEffect } from "react";
import "../assets/map.css";
import osm from "osm";

const Maps = () => {
  const position={lat:47.88038,long: 10.6222475};
  const [objetPosition,setObjetPosition]=useState(position);

  function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng.toString());
  }

  useEffect(() => {
    let map = osm();
    map = osm().position(position.lat,position.long);
    document.querySelector(".mapContainer").appendChild(map.show());
    map.on('click', onMapClick);
  },[]);


  return (
    <>
    <div className="mapContainer"></div>
    </>
  );   
  };

export default Maps;
