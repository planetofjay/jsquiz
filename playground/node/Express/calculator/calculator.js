import express from "express";

const app = express();

app.get("/", function(req,res){
  res.send("<h1>Hello World</h1>");
});

app.listen(3000, function(req,res){
  console.log("Server started on port 3000");
});