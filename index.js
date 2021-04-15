/*
document.querySelectorAll("button").forEach(function (elem) {
    elem.addEventListener("click", function () {
      alert("clciked");
    }
  )
}
) */


var arrayOfDrumButtons = document.querySelectorAll("button.drum");

var numberOfDrumButtons = arrayOfDrumButtons.length;


// click event for all buttons
for(var i=0; i<numberOfDrumButtons; i++){
  arrayOfDrumButtons[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })
}

// keypress Event in the document
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})



function buttonAnimation (key) {

  document.querySelector("."+key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}


function makeSound(key) {
  switch(key){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;

    default:
      console.log(this.innerHTML);
  }
}
