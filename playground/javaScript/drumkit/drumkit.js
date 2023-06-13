// detecting button press
let numberOfDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumBtn; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    let btnInnerHTML = this.innerHTML;

    makeSound(btnInnerHTML);

    btnAnimation(btnInnerHTML);

  });

}

// detecting keyboard press
document.addEventListener("keydown", function (event) {

  makeSound(event.key);

  btnAnimation(event.key);

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

// button animation
function btnAnimation(currentKey) {

  let activeBtn = document.querySelector("." + currentKey);

  activeBtn.classList.add("pressed");

  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);  
  
}