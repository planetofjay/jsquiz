//jshint esversion:6

import express from "express";

const app = express();

app.listen(3000, function() {
  console.log("Server started on port 3000");
});