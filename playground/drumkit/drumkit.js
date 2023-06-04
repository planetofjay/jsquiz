// detecting button press
let numberOfDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumBtn; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    let btnInnerHTML = this.innerHTML;

    makeSound(btnInnerHTML);

  });

}

// detecting keyboard press
document.addEventListener("keydown", function (event) {

  makeSound(event.key);

});

// detecting sound
function makeSound(key) {

  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(btnInnerHTML);
  }

}


function anotherAddEventListener(typeOfEvent, callback) {

  let eventThatHappened = {
    eventType: "keydown",
    key: "d",
    durationOfKeypress: 2,
  }

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }

}

anotherAddEventListener("keydown", function(event) {
  console.log(event);
});

document.addEventListener("keydown", function(event) {
  console.log(event);
});