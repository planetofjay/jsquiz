//jshint esversion:6

import express from "express";

const app = express();

app.get("/", function(request, response){
  // console.log(request);
  // console.log(response);
  response.send("<h1>Planet of Jay</h1>");
});

app.get("/contact", function(request, response){
  response.send("Contact me at: jae44dv@gmail.com");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});