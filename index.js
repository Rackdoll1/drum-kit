// Querying elements
const buttonElements = document.querySelectorAll(".drum");

// auxiliary functions
const makeSound= (key) => {
  switch (key) {
    case "w":
      new Audio("sounds/snare.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "j":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "k":
      new Audio("sounds/hihat.mp3").play();
      break;

    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "i":
      new Audio("sounds/crash.mp3").play();
      break;

    default:
      break;
  }
};

const buttonAnimation = (currentkey) => {
  const button = document.querySelector(`.${currentkey}`);
  button.classList.add("pressed");
  setTimeout(() => button.classList.remove("pressed"), 60);
};


// and event listener creates and has an event object when its event is triggered,
// with all the info of that specific event inside it
for(let i = 0; i < buttonElements.length; i++){
  // Avoid arrow functions when using a code block with methods.
  // in arrow funcitons, "this" keyword refers to a global scope
  // must use regular function to call this
  buttonElements[i].addEventListener("click", function() {
    const buttonTextContent = this.textContent;
    makeSound(buttonTextContent);
    buttonAnimation(buttonTextContent);

  });
}

// you can add an event listener to the entire document
document.addEventListener("keydown", () => {
  // you can also pass in the event that triggers the event listener
  // and use its properties as arguments
  makeSound(event.key);
  buttonAnimation(event.key);
});
