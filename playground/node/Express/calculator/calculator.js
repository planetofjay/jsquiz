import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", function(req,res){
  console.log(__dirname);
});

app.listen(3000, function(req,res){
  console.log("Server is running on port 3000");
});