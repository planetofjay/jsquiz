//jshint esversion: 6

import express from "express";
import bodyParser from "body-parser";
import request from "request";

const app = express();

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});