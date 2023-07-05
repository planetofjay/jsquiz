//jshint esversion: 6

import express from "express";
import bodyParser from "body-parser";

const app = express();

app.get("/", function (req, res) {

  let today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("It's the weekend!");
  } else {
    res.send("It's time to work!");
  }

});



app.listen(3000, function () {
  console.log("Server started on port 3000");
});