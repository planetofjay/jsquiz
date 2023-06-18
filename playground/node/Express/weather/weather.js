import express from "express";
import https from "https";

const app = express();

app.get("/", function(req,res){

  const city = "Toronto";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
    })
  });

  res.send("Server is up and running");
});



app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});