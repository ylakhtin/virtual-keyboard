import keyboard from "./keyboard.js";

function listenKeys(){
  addEventListener("keydown", (event)=>{
    console.log(event.key);
    // Find the keyboard key that was pressed
    keyboard.forEach(element => {
      element.forEach(elem => {
        if ((elem.main === event.key) || (elem.key === event.key)){
          togglePressedStyle(elem.main);
        }
      });
    });
  });
}

function togglePressedStyle(name){
  let target = document.querySelectorAll(".button");
  for (let i = 0; i < target.length; i++) {
    if (target[i].innerHTML === name){
      target[i].classList.add("key-pressed");
      console.log("toggle");
    }
  }
}

export default listenKeys;