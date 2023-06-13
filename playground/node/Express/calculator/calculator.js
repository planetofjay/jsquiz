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
import bodyParser from "body-parser";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function(req,res){
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(req,res){
  console.log("Server is running on port 3000");
});

/**
 * "Unchecked runtime.lastError: The message port closed before a response was received."
 * The cause of this issue is related to one of your chrome extensions, not CORS or CORB. 
 * To fix that you can turn off each and every chrome extension you installed.
 */