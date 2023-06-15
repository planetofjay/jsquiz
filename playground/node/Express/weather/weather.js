import express from "express";
import https from "https";

const app = express();

app.get("/", function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + process.WEATHER_API_KEY + "&units=metric";
  
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      console.log(data);
    })
  });

  res.send("Server is up and running");
});



app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});