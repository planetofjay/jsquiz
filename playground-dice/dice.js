// Player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

let randomDiceImg = "dice" + randomNum1 + ".png"; // dice1.png to dice6.png

let randomImgSrc = "images/" + randomDiceImg; // images/dice1.png to images/dice6.png

let player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src", randomImgSrc);

// Player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomImgSrc2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);