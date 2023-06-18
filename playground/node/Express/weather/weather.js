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
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + "<b>" + desc + "</b>" + ".</p>");
      res.write("<h1>The temperature in Toronto is " + temp + " degrees Celcius.</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    })
  });

});


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});