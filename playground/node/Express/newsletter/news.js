//jshint esversion: 6
//Newsletter-Signup

import express from "express";
import bodyParser from "body-parser";
import request from "request";
import { fileURLToPath } from "url";
import { dirname } from "path";
import https from "https";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);
  const url = `https://us21.api.mailchimp.com/3.0/lists/${process.env.MAIL_UNIQUE_KEY}`;
  const options = {
    method: "POST",
    auth: `jay1:${process.env.MAIL_API_KEY}`
  };
  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      console.log(JSON.parse(data));
    });
  });
  
  request.write(jsonData);
  request.end();
});
 
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});