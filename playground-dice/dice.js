// random number between 1 and 6
let randomNum1 = Math.floor(Math.random() * 6) + 1;

// dice1.png to dice6.png
let randomDiceImg = "dice" + randomNum1 + ".png";

// images/dice1.png to images/dice6.png
let randomImgSrc = "images/" + randomDiceImg;

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);