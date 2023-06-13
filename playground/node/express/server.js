//jshint esversion:6

import express from "express";

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Planet of Jay</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: jae44dv@gmail.com");
});

app.get("/about", function(req, res){
  res.send("Here is Jaejin Lee. I love code.");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Beer</li><li>Code</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});