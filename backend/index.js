const dotenv = require("dotenv").config;

const http = require("https");

const options = {
  method: "GET",
  hostname: "api.ambeedata.com",
  port: null,
  path: "/latest/by-lat-lng?lat=12.9889055&lng=77.574044",
  headers: {
    "x-api-key": `${process.env.AMBEE_API_KEY}`,
    "Content-type": "application/json",
  },
};
