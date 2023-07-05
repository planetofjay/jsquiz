//jshint esversion: 6

import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", function (req, res) {

  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    res.sendFile(__dirname + "/weekend.html");
  } else {
    day = "Weekday"
    res.sendFile(__dirname + "/weekday.html");
  }

});



app.listen(3000, function () {
  console.log("Server started on port 3000");
});