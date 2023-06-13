/**
 * From the Node.js documentation:
 * No require, exports, module.exports, __filename, __dirname
 * These CommonJS variables are not available in ES modules.
 * require can be imported into an ES module using module.createRequire().
 * Equivalents of __filename and __dirname can be created inside of each file via import.meta.url:
 */

import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", function(req,res){
  res.sendFile(__dirname + "/calculator.html");
});

app.listen(3000, function(req,res){
  console.log("Server is running on port 3000");
});